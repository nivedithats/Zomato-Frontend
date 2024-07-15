import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function RestaurantView() {
    const [restaurantData, setRestaurantData] = useState([]);

    useEffect(()=>{
      const getData = () =>{
       axios.get('http://localhost:3005/api/restaurants/list')
       .then((res)=>{
        setRestaurantData(res.data.data)
       })
       .catch((err)=>{
        console.log(err.message);
       })
      }
      getData()        
    }, [])
  return (
    <div className='container-fluid p-3 p-md-5'>
      
      <div className="row">
        {
            restaurantData.map((item, index)=>(
                <div className="col-md-4">
                    <div className="card rounded-3 overflow-hidden">
                        <img src={item.image} alt="" className="w-100" />
                      <div className="p-3">
                      <span className="d-block  fs-5">{item.name}</span>
                      <p className="fs-6 text-secondary">{item.location}</p>
                     <Link to={`/view/${item._id}`}>View Restaurant</Link>
                      </div>
                    </div>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default RestaurantView