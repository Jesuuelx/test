import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useApoloComments } from "../hooks/useApoloComments";
import { AddComment } from "./AddComment";

export const Comments = () => {
  const { repository, name, error } = useParams();

  const { data, title, loading, error404 } = useApoloComments(
    repository,
    name,
    error
  );

  const [info, setInfo] = useState([{}]);

  

  return (
    <>
      {loading ? (
        <p className="animate__animated animate__flash font-bold text-cyan-600"> Loading </p>
      ) : (
        <div>
          <div className="container space-x-36 bg-slate-200 p-16 mx-auto">
          {error404 && <p> Error 404</p>}
        <h1 className="animate__animated animate__fadeIn font-bold text-cyan-600 italic hover:not-italic hover:text-2xl">Name of Error : { title }</h1>
        </div>
          {data.map((data) => (
            <div key={data.bodyText} className="card p-8 text-xl font-bold hover:text-2xl">
              <div>{data.bodyText} </div>
              <div>
            
                <p>Made By : </p> {data.author}
              </div>
            </div>
          ))}
           {info.map((info) => (
            <div key={new Date().getTime()} className={'card p-8 text-xl font-bold hover:text-2xl'}>
              <div>{info.bodyText} </div>
              <div>
            
                   <p>Made By:</p>      {info.author}
              </div>
            </div>
          ))} 

          <AddComment setInfo={setInfo} />
        </div>
      )}
    </>
  );
};
