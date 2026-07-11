import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/http.js";

const authContext = createContext(null);

export function authProvider({children}){
    // set user and loading states
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // start with the user details, check if the user is loggedIn once the page reloads or user logs in
    useEffect(()=>{
        api.get('/auth/getMe')
        .then((res)=> setUser(res.data))
        .catch(()=> setUser(null))
        .finally(()=> setLoading(false));
    },[])

    // handle login 
    const logIn = async (email, password)=>{
        const res = await api.post('/login', {email, password});
        setUser(res.data);
        return res.data;
    }

    // handle signup
    const signUp = async (fullName, email, password)=>{
        const res = await api.post('/signup', ({fullName, email, password}));
        setUser(res.data);
        return res.data;
    }

    // handle logout
    const logOut = async ()=>{
        await api.post('/logout');
        setUser(null);
    }

    return(
        <authContext.Provider value={{user, loading, logIn, signUp, logOut}}>
            {children}
        </authContext.Provider>
    );

    export function useAuth(){
        return useContext(authContext);
    }
}

