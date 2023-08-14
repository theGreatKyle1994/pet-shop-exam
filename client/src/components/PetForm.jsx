import { useState, useEffect } from "react";

const PetForm = ({ propsSubmitHandler, petData, errors }) => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const formInputHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const { name, type, description, skill1, skill2, skill3 } = formData;
    const submittedData = {
      name,
      type,
      description,
      skills: [skill1, skill2, skill3].filter(Boolean),
    };
    propsSubmitHandler(submittedData);
  };

  useEffect(() => {
    if (petData) {
      const { name, type, description, skills } = petData;
      setFormData({
        name,
        type,
        description,
        skill1: skills[0] || "",
        skill2: skills[1] || "",
        skill3: skills[3] || "",
      });
    }
  }, [petData]);

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        {errors.name && <p className="error-msg">{errors.name.message}</p>}
        <label>Pet Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={formInputHandler}
        />
        {errors.type && <p className="error-msg">{errors.type.message}</p>}
        <label>Pet Type:</label>
        <input
          id="type"
          type="text"
          name="type"
          value={formData.type}
          onChange={formInputHandler}
        />
        {errors.description && (
          <p className="error-msg">{errors.description.message}</p>
        )}
        <label>Pet Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={formData.description}
          onChange={formInputHandler}
        />
        <button type="submit" className="form-btn">
          {petData ? "Edit" : "Add"} Pet
        </button>
      </div>
      <div>
        <p>Skills (optional):</p>
        <label>Skill 1:</label>
        <input
          id="skill1"
          type="text"
          name="skill1"
          value={formData.skill1}
          onChange={formInputHandler}
        />
        <label>Skill 2:</label>
        <input
          id="skill2"
          type="text"
          name="skill2"
          value={formData.skill2}
          onChange={formInputHandler}
        />
        <label>Skill 3:</label>
        <input
          id="skill3"
          type="text"
          name="skill3"
          value={formData.skill3}
          onChange={formInputHandler}
        />
      </div>
    </form>
  );
};

export default PetForm;
