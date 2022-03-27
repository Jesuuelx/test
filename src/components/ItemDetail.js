import React from "react";
import { useParams } from "react-router-dom";
import { useApoloDetails } from "../hooks/useApoloDetails";
import { Issues } from "./Issues";

export const ItemDetail = () => {
  const result = useParams();
  console.log(result);

  const { id, name, repository } = result;
  console.log(id, name, repository);

  const { dataDesc, loading, error } = useApoloDetails(repository, id);
  console.log(dataDesc);

  return (
    <>
      {loading ? (
        <p className="animate__animated animate__flash font-bold text-cyan-600"> Loading</p>
      ) : (
        <div className="container space-x-36 bg-slate-200 p-16 mx-auto">
        <div>
          <h1 className="animate__animated animate__fadeIn font-bold text-cyan-600 italic hover:not-italic hover:text-2xl">Information of the errors</h1>
          {error && (
            <p className="text-cyan-600 font-old">Archivo No Encontrado</p>
          )}
          </div>
          {dataDesc.map((data) => (
            <Issues key={data.id} {...data} repository={repository} id={id} />
          ))}
        </div>
      )}
    </>
  );
};
