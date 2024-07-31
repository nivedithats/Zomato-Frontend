import React, { useEffect, useState } from 'react'
import './style.css'

const data =[
        {
            Categorie:'food',
            image:"https://b.zmtcdn.com/data/pictures/chains/3/50413/19dd146e9dfa1db16adb8ff67a8eb53f.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            Categorie:'food',
            image:"https://b.zmtcdn.com/data/pictures/chains/3/50413/ba1d66950aeaab3fcbdd296f5fab5b83.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            Categorie:'food',
            image:"https://b.zmtcdn.com/data/pictures/chains/3/50413/6995ab8759f4a68eab7dffa373ede118.jpeg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        },
        {
            Categorie:"Ambience",
            image:"https://b.zmtcdn.com/data/pictures/3/50413/b35e037c6fb81b3bd97f7476044e6e10.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"
        }

]
function Photos() {
    const [food, setFood] = useState(data);

    useEffect(()=>{
      
    },[])

   const filterdata1 = () =>{
    setFood(data.filter((item)=>item.Categorie == "Ambience"))
   }

   const filterdata2 = () =>{
    setFood(data.filter((item)=>item.Categorie == "food"))
   }
   const allFilter = () =>{
        setFood(data)
   } 
  return (
    <div className='container'>
      <h1 className="fs-1  mb-3">Photos</h1>
      <div className="p-3 mb-3 px-0 d-flex gap-3 align-items-center">

        <button className="btn btn-outline-danger" onClick={allFilter}>All({data.length})</button>
        <button className="btn btn-outline-danger" onClick={filterdata2}>Food ({data.filter((item)=>item.Categorie == "food").length})</button>
        <button className="btn btn-outline-danger" onClick={filterdata1}>Ambience ({data.filter((item)=>item.Categorie == "Ambience").length})</button>
      </div>
      <div className="row">
        {
            food.map((item, index)=>(
                <div className="col-md-3">
                    <div className="card mb-3">
                        <img src={item.image} alt={item.Categorie} className="w-100 rounded" />
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Photos
