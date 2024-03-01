import React, { useEffect, useState }  from 'react';
import "./Nav.css";

function Nav(){
    const[show, handleShow]= useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    };

    useEffect(()=>
    {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    } ,[]);
    
    return(
        <div className={`Nav ${show &&"nav_black"}`}>
            <div className="Nav_contents">
            <img 
          className="nav_logo" src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n " alt=""/>
            <img 
            className="nav_avatar" src="https://imgs.search.brave.com/moiSK0YW_qqpsLp11YqwvH035mV2ZzKKcKrbYmZsQSs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbmdm/cmUuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9zbWlsZXktZmFj/ZS0zNy0zMDB4MzAw/LnBuZw" alt=""/>
           
        
            </div>
        </div>
    )
}
export default Nav;