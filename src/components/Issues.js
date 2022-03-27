import React from "react";
import { Link } from "react-router-dom";

export const Issues = ({number, title, repository, id}) => {
  console.log(repository, id, number)
    return (
    <div className="card p-8 text-xl font-bold hover:text-2xl">
      
     <Link to={`/comentarios/${repository}/${id}/${number}`}>   {number} ----- {title}  </Link>
    </div>
  );
};
