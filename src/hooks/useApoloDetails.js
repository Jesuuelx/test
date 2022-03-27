import { useEffect, useState } from "react";
import { getDetail } from "../helpers/getDetails";

export const useApoloDetails = (owner, project) => {
  const [repo, setRepo] = useState({
    dataDesc:[],
    loading: true,
    error:false,
  });

  useEffect(() => {
    getDetail(owner, project).then((data) => {
     if( data.length > 0) {
     
      setRepo({
       dataDesc:data,
       loading:false,
       error:false
     })
    }else{
      setRepo({
        dataDesc:data,
        loading:false,
        error:true,
      })
    }
      
      
    }).catch( err => {
      setRepo({
        dataDesc:[],
        loading:false,
        error:true,
      })

    })
  }, [owner, project]);

  return repo;
};
