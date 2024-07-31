import './style.css'

function Profile({url, alt, width, height}){
    return <img src={url} alt={alt} className='profile' />
}
export default Profile;