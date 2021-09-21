import React from "react";
import "./Header.css"
import logo from "../../assets/logo.svg";


export default class Header extends React.Component{
    
    render(){
        return(
            <div className="header">
                <img id="logo-img" src={logo} alt= "logo" />
            </div>
        )
    }
}