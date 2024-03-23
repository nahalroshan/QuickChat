import { useState } from "react";

const userSignup = () =>{
    const [loading,setLoading] = useState(false)

    const signup = async({fullname,username,password,confirmpassword,gender})=>{
        const success = handleInputErrors({fullname,username,password,confirmpassword,gender})
        if(!success)
            return;
    }

}
export  default userSignup;

function handleInputErrors({fullname,username,password,confirmpassword,gender}){
    if(!fullname || !username || !password || !confirmpassword|| !gender){
        
    }
}