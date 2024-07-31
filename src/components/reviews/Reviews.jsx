import React from 'react'
import './style.css'
import Profile from '../../utils/profile/Profile'


const data = [
    {
        profile:'https://b.zmtcdn.com/data/user_profile_pictures/007/2907ef1bfff177fc11028f081e6ab007.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
        rating:1,
        follwers:86,
        tag:'DELIVERY',
        date:'30-07-2024',
        desc:"The garlic bread was burnt on both the sides. It felt like a stone with cheese. The pasta wasn't great either. The zuppa pomodoro soup was like a water with flavour. Though it was the best of what was ordered. I have ordered from little Italy a million times and I have never been disappointed before.",
        comments:['aaa'],
        votes:0,
        username:'Vishakha Kandachar'
    },
    {
        profile:'https://b.zmtcdn.com/data/user_profile_pictures/007/2907ef1bfff177fc11028f081e6ab007.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A',
        rating:1,
        follwers:86,
        tag:'DELIVERY',
        date:'30-07-2024',
        desc:"The garlic bread was burnt on both the sides. It felt like a stone with cheese. The pasta wasn't great either. The zuppa pomodoro soup was like a water with flavour. Though it was the best of what was ordered. I have ordered from little Italy a million times and I have never been disappointed before.",
        comments:['aaa'],
        votes:0,
        username:'Vishakha Kandachar'
    }
]

function Reviews() {
  return (
  <div className="review-container">
      <div className='container p-3'>
        <h1 className="fs-1">Little Italy Reviews</h1>
        {
            data.map((item, index)=>(
                <div className=" review-card p-3">
                    <div className="review-card-top d-flex gap-3">
                     <Profile url={item.profile} alt={item.username} />
                        <div>
                            <span className="d-block fs-5">{item.username}</span>
                            <small className="text-secondary small">{item.follwers} Followers</small>
                        </div>
                    </div>
                    <div className="mt-4 d-flex gap-3 align-items-center">
                        <button className="btn btn-sm btn-danger py-0">{item.rating} ⭐</button>
                         <span className="fs-6">{item.tag}</span>
                         <small className="small text-secondary">{item.date}</small>
                    </div>
                    <p className="fs-5 text-secondary mt-3">{item.desc}</p>
                    <span className="d-block mt-3 text-secondary">{item.votes} Votes for for helpfull {item.comments.length} Comments</span>

                    <div className="btns d-flex gap-3 flex-wrap mt-4">
                        <button><i class="bi bi-hand-thumbs-up"></i>Like</button>
                        <button><i class="bi bi-chat"></i> Comment</button>
                        <button><i class="bi bi-sign-turn-right"></i> Share</button>
                    </div>
                </div>
            ))
        }

    </div>
  </div>
  )
}

export default Reviews
