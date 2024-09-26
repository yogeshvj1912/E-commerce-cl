import React from 'react'
import { useParams } from 'react-router-dom'

function ShowProduct() {
const {id} = useParams()

  return (
    <div>
      <h1>Still developing</h1>
      <h4>ShowProduct : {id}</h4>
    </div>
  )
}

export default ShowProduct