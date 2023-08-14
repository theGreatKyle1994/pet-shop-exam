import PetForm from "./PetForm";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditPet = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [pet, setPet] = useState();
  const [errors, setErrors] = useState({
    name: "",
    type: "",
    description: "",
  });

  const submitHandler = (submittedData) => {
    axios
      .patch(`http://localhost:8000/api/pets/${id}`, submittedData)
      .then((res) => {
        if (!res.data.error) navigate("/");
        else setErrors(res.data.error.errors);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pets/${id}`)
      .then((res) => setPet(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="header">
        <h1>Pet Shelter</h1>
        <a href="/">back to home</a>
      </div>
      <h2 className="subheader">Edit {pet && pet.name}</h2>
      <PetForm
        propsSubmitHandler={submitHandler}
        petData={pet}
        errors={errors}
      />
    </>
  );
};

export default EditPet;
