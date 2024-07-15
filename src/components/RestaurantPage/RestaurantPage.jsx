import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './style.css'

function RestaurantPage() {
    const {id} = useParams();
    const [data, setData] = useState({})

    useEffect(()=>{
        const getData = () =>{
            axios.get(`http://localhost:3005/api/restaurant/${id}`)
            .then((res)=>{
                setData(res.data.data)
            })
            .catch((err)=>{
                console.log(err.message);
            })

        }
        getData();
    }, [id])
  return (
    <div>
        <div className="container  p-3 p-md-5">
            <img src={data.image} alt="" className="w-100" />
            <h1 className="fs-1">{data.name}</h1>
            <p className="fs-5 text-secondary">{data.location}</p>
            <p className="text-danger fs-6">Opens in {data.openTime} - {data.closeTime}</p>
        </div>
    </div>
  )
}

export default RestaurantPage