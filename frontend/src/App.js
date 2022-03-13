import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewUser } from "./Redux/actions";

function App() {
  const initialState = {
    name: "",
    email: "",
    avatar: "",
  };

  const [student, setStudent] = useState(initialState);

  const dispatch = useDispatch();

  const addStudentDetails = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") setStudent({ ...student, avatar: e.target.files[0] });
    else setStudent({ ...student, [name]: value });
  };

  const { user } = useSelector((state) => state.userReducer);

  const addStudent = async (e) => {
    e.preventDefault();
    let studentForm = new FormData();
    for (let key in student) {
      studentForm.append(key, student[key]);
    }
    await dispatch(addNewUser(studentForm));
  };

  let image = user?.avatar?.split("/");
  image = `http://localhost:8000/uploads/${image?.[image?.length - 1]}`;

  return (
    <div>
      <form style={{ marginBottom: 50 }} encType="multipart/form-data">
        <label>Name:</label>
        <br />
        <input
          type="name"
          name="name"
          value={student.name}
          onChange={addStudentDetails}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={addStudentDetails}
        />
        <br />
        <label>Profile pic:</label>
        <input
          type="file"
          // value={student.avatar}
          onChange={addStudentDetails}
        />
        <br />
        <button onClick={addStudent}>Register</button>
      </form>
      {user?.avatar ? (
        <img height={350} width={250} src={image} alt={user.name} />
      ) : null}
    </div>
  );
}

export default App;
