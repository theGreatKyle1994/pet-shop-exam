import PetForm from "./PetForm";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePet = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "",
    type: "",
    description: "",
  });

  const submitHandler = (submittedData) => {
    axios
      .post("http://localhost:8000/api/pets/new", submittedData)
      .then((res) => {
        if (!res.data.error) navigate("/");
        else setErrors(res.data.error.errors);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="header">
        <h1>Pet Shelter</h1>
        <a href="/">back to home</a>
      </div>
      <h2 className="subheader">Know a pet needing a home?</h2>
      <PetForm propsSubmitHandler={submitHandler} errors={errors} />
    </>
  );
};

export default CreatePet;
