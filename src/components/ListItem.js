import React from "react";
import { Link } from "react-router-dom";

export const ListItem = ({ name, id, owner }) => {
  return (
    <div className="card p-8 text-xl font-bold hover:text-2xl border-4">
      <p> <Link to={`/${owner}/${id}/${name}`}> {name} </Link></p>
    </div>
  );
};
