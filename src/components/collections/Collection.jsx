import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'


function Collection() {
    const [data, setData] = useState([]);
  
    useEffect(()=>{
            const fetch = () =>{
                axios.get('http://localhost:3005/api/restaurants/list')
                .then((res)=>{
                    setData(res.data.data)
                })
                .catch((err)=>{
                    console.log(err);
                })
            }
            fetch();
    }, [])
  return (
    <div className='container p-3'>
        <header className="d-flex justify-content-between gap-3 align-items-center">
           <div>
           <h1 className="fs-2">Collections</h1>
           <p className="fs-6">Explore curated lists of top restaurants, cafes, pubs, and bars in Bengaluru, based on trends</p>
           </div>
        <Link to="#" className='text-danger'>All collections in Bengaluru</Link>
           

        </header>
        <div className="row">
                {
                    data.map((item, index)=>(
                        <div className="col-md-3">
                           <Link to={`/view/${item._id}`}>
                           <div className="collection-card">
                                <img src={item.image} alt={item.name} className="w-100" />
                                <div className="collection-info">
                                    <span className="d-block fs-4">{item.name}</span>
                                    <span className="fs-6">{item.categories?.length} categories</span>
                                </div>
                            </div>
                           </Link>
                        </div>
                    ))
                }
            </div>
    </div>
  )
}

export default Collection