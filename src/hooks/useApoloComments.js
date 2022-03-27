import { useEffect, useState } from "react";
import { getComments } from "../helpers/getComments";


export const useApoloComments = (owner, project, number) => {
  const [repo, setRepo] = useState({
    data:[],
    title:null,
    loading: true,
    error404:false,
  });

  useEffect(() => {
    getComments(owner, project, number).then(({title, comments}) => {
      setRepo({
        title:title,
        data:comments,
        loading:false,
        error404:false
      })
      
    }).catch( err => {
      setRepo({
        dataDesc:[],
        title:null,
        loading:false,
        error404:true,
      })

    })
  }, [owner, project, number]);

  return repo;
};
