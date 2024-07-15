import React from 'react'
import categoriesdata from '../../data/data'
import './style.css'
import { Link } from 'react-router-dom'



function Categories() {
  return (
    <div className="container p-3">
        <div className="row">
            {
                categoriesdata.map((item, index)=>(
                    <div className="col-md-4" key={index}>
                      <Link to={item.link}>
                      <div className="card categorie-card h-100 overflow-hidden rounded-3">
                            <img src={item.image} alt={item.title} className='w-100' />
                            <div className="p-2">
                                <span className="fs-4 d-block">{item.title}</span>
                                <span className="fs-6 text-secondary">{item.desc}</span>
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

export default Categories