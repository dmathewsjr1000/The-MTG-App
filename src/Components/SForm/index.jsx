import { useState } from "react";

export default function SForm({ cardsearch }) {
  const [formData, setFormData] = useState({
    searchTerm: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cardsearch(formData.searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="formData">
      <h1>Magic Card App</h1>
      <input
        type="text"
        name="searchTerm"
        onChange={handleChange}
        value={formData.searchTerm}
      />
      <input type="submit" value="submit" />
    </form>
  );
}


