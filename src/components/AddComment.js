import React from "react";
import { useForm } from "../hooks/useForm";

export const AddComment = ({ setInfo }) => {
  const [values, handleInputChange, reset] = useForm({
    info: "",
    author:"",
  });

  const { info, author } = values;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
    setInfo((c) => [...c, {
        bodyText:info,
        author:author,
    }]);
    reset();
  };

  return (
    <form className="space-x-8" onSubmit={handleSubmit}>
      <input 
        type="text"
        name="info"
        className="w-80 h-11 rounded-md text-900 space-x-8"
        placeholder="Your Comment Here!"
        autoComplete="off"
        value={info}
        onChange={handleInputChange}
      />

<input 
        type="text"
        name="author"
        className="w-80 h-11 rounded-md text-900 space-x-8"
        placeholder="Made By:"
        autoComplete="off"
        value={author}
        onChange={handleInputChange}
      />
           <button type="submit" className="btn btn-primary">
                Guardar
            </button>
    </form>
  );
};
