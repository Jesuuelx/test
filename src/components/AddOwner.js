import React from "react";
import { useForm } from "../hooks/useForm";

export const AddOwner = ({ setOwner }) => {
  const [values, handleInputChange, reset] = useForm({
    seach: "",
  });

  const { seach } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(seach);
    setOwner((o) => [seach, ...o]);
    reset();
  };

  return (
    <form className="space-x-8" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="seach"
        className="w-80 h-11 rounded-md text-900 space-x-8"
        placeholder="owner"
        autoComplete="off"
        value={seach}
        onChange={handleInputChange}
      />
    </form>
  );
};
