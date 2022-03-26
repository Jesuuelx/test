import React from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../helpers/getDetails';
import { useApoloDetails } from '../hooks/useApoloDetails';

export const ItemDetail = () => {
  
const result = useParams();
console.log(result)


  const { id, name , repository} = result;
  console.log(id, name, repository)

  const {dataDesc, dataComment, loading, error} = useApoloDetails(repository, id);
  console.log(dataDesc)
  console.log(dataComment)
  
  return (
    <>
    { loading ?
    (

      <p>Loading</p>

    ) :
    ( 
    <div>
<h1>Informacion de los Errores</h1>

{

dataDesc.map( (data) => (
  <div key={data.number}>{data.number} ----- { data.title }</div>
))


}

<div>
{
dataComment.map( (data ) => (
  <div key={data.id}> {data.bodyText } </div>
))


}


</div>

    </div>

    )
  }
    </>
  )
}
