import { useContext, useEffect, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie"
import axios from "axios";
import { toast } from "react-toastify";


const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, setisAuthenticated] = useState(false);
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();


    useEffect(()=>{
        const token = Cookie.get('token');
        console.log(token);

        if(token) {
            validateToken(token)
            .then(isvalid=>{
                setLoading(false)

                if(isvalid){
                    navigate('/')
                    setisAuthenticated(true);
                }else{
                    setisAuthenticated(false);
                    setLoading(false)
                    // logout();
                }
            })
        }else{
            setisAuthenticated(false);
            setLoading(false)
        }
    }, [])



    const  validateToken =  async(token) => {
        console.log('t', token);
        setLoading(true)
      try {
        const checkToken = await axios.post('http://localhost:3005/api/validateToken',{}, {
            headers: { 'authorization': `Bearer ${(token)}` }
        })

        if(checkToken.status === 200){
            setisAuthenticated(true);
            console.log(checkToken.data.user);
            setuser(checkToken.data.user);
            console.log(user);
            return true;
        }
        return false;
      } catch (error) {
        setisAuthenticated(false);
        setuser(null);
        return false;
      }
    }


    const login = (token, userData) =>{
        Cookie.set('token', token, {
            expires:7,
            secure:true,
            sameSite:'strict',
        });
        setuser(userData);
        navigate('/')
    }

    const logout = () =>{
      if(window.confirm("Are you sure want to lagout from app")){
        Cookie.remove('token')
        setisAuthenticated(false);
        setuser(null)
        navigate('/login');
        toast.warning(`Logout is successfull`)
      }else{
        toast.info('Lgout is cancelled')
      }
    }


    return (
        <AuthContext.Provider value={{isAuthenticated, setisAuthenticated, login, logout, user}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);