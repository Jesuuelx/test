import { useEffect, useState } from "react";
import { getProps } from "../helpers/getProps";

export const useApoloOwner = (owner) => {
  const [repo, setRepo] = useState({
    data:[],
    loading: true,
    error:false,
  });

  useEffect(() => {
    getProps(owner).then((data) => {
      setRepo({
        data:data,
        loading: false,
        error:false,
      });
    }).catch( err => {
      setRepo({
        data:[],
        loading:false,
        error:true,
      })

    })
  }, [owner]);

  return repo;
};
