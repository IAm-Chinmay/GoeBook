import React from "react";

import AuthUserCard from "../components/authUser/AuthUserCard";
import Switch from "../../Elements/Switch";

import './AuthUser.css'

const AuthUser = props =>{

    

    return (
        <>
        <div className="center">
       <AuthUserCard/>
       </div>
       <div className="switch-css">
       <Switch className="switch-css-2" toGo = 'Sign' at = 'Log'  goToPage = '/SignUp'/>
       </div>
       </>
    )
}

export default AuthUser;