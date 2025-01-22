import { useEffect } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
    const  [globalLoading, setGlobalLoading] = useState(false);
    const [user, setUser] = useState(null);
    
    
    const navigate = useNavigate();

    useEffect(()=> {

        const token = localStorage.getItem("@TOKEN");
        (async () => {
            if(token){
          
                try {
                    setGlobalLoading(true)
                    const response = await api.get("/profile ", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    
                    setUser(response.data);
                    navigate("/home")
   
                } catch (error) {
                    console.log(error)
                }finally{
                    setGlobalLoading(false)
                }
            }
        })()
    }, [])

    const userRegister = async (formData, setLoading) => {
      
        try {
          setLoading(true);
          const response = await api.post("/users", formData);
          toast.success(response.statusText);
    
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          setLoading(false);
        }
      };

    async function userLogin(formData, setLoading) {
        try {
          setLoading(true);
          const response = await api.post("/sessions", formData);

          localStorage.setItem("@TOKEN", response.data.token);
  
          toast.success(response.statusText);
          setUser(response.data.user);
          navigate("/home");
     
        } catch (error) {
          toast.error(error.response.data.message);
        } finally {
          setLoading(false);
        }
      }
    
      function userLogout() {
        localStorage.removeItem("@TOKEN");
        setUser(null);
        navigate("/");
      }

    return(
        <UserContext.Provider value={{user, userRegister, userLogin, userLogout , globalLoading}}>
            {children}
        </UserContext.Provider>
    )
}