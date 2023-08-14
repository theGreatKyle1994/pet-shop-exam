import { useEffect, useState } from "react";
import axios from "axios";

const AllPets = () => {
  const [pets, setPets] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/pets")
      .then((res) => {
        setPets(res.data.sort((a, b) => (a.type < b.type ? -1 : 1)));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="header">
        <h1>Pet Shelter</h1>
        <a href="/pets/new">add a pet to the shelter</a>
      </div>
      <h2 className="subheader">These pets are looking for a good home</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pets &&
            pets.map((pet, index) => (
              <tr key={index}>
                <td>{pet.name}</td>
                <td>{pet.type}</td>
                <td>
                  <a href={`/pets/view/${pet._id}`}>details</a> |{" "}
                  <a href={`/pets/${pet._id}`}>edit</a>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default AllPets;
