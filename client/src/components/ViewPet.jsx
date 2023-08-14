import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ViewPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:8000/api/pets/${id}`)
      .then(() => navigate("/"))
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
      <div className="adopt-container">
        <h2 className="subheader">Details about: {pet && pet.name}</h2>
        <form onSubmit={onSubmitHandler} id="adopt-form">
          <button type="submit">Adopt {pet && pet.name}</button>
        </form>
      </div>
      <section>
        <div>
          <p>Pet Type:</p>
          <p>Desription:</p>
          <p>Skills:</p>
        </div>
        <div>
          <p>{pet && pet.type}</p>
          <p>{pet && pet.description}</p>
          <p>
            {pet &&
              pet.skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
          </p>
        </div>
      </section>
    </>
  );
};

export default ViewPet;
