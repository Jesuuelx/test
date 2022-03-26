import { useEffect, useState } from "react";
import { getDetail } from "../helpers/getDetails";

export const useApoloDetails = (owner, project) => {
  const [repo, setRepo] = useState({
    dataDesc:[],
    dataComment:[],
    loading: true,
    error:false,
  });

  useEffect(() => {
    getDetail(owner, project).then(({description, final}) => {
      setRepo({
        dataDesc:description,
        dataComment:final,
        loading: false,
        error:false,
      });
    }).catch( err => {
      setRepo({
        dataDesc:[],
        dataComment:[],
        loading:false,
        error:true,
      })

    })
  }, [owner]);

  return repo;
};
