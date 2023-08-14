import "./App.css";
import { Routes, Route } from "react-router-dom";
import AllPets from "./components/AllPets";
import CreatePet from "./components/CreatePet";
import EditPet from "./components/EditPet";
import ViewPet from "./components/ViewPet";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AllPets />} />
        <Route path="/pets/new" element={<CreatePet />} />
        <Route path="/pets/view/:id" element={<ViewPet />} />
        <Route path="/pets/:id" element={<EditPet />} />
      </Routes>
    </>
  );
};

export default App;
