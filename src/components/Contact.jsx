import React, {useState,useEffect} from "react";
import Call from '../assets/call.png'
import Message from '../assets/comment.png'

const Contact = (props) => {
    const user = props.user
    const clicked = props.clicked
    const setClicked = props.setClicked

    //Sets the Contact ID of the clicked contact
    const handleClick = (event) => {
        setClicked(user.id) 
    }
   
    
    return (
        <>
            <div style={{width:'100%',height:'70px',backgroundColor:clicked===user.id?"#D6E1FF":"#F0F4FF"}} onClick={(e)=>{handleClick(e)}}>
               
                <div className="container" style={{display:'flex',flexDirection:'row'}}>

                    <div className="details" style={{flexGrow:1,padding:'10px'}}>
                        <div className="name" style={{display:'flex',justifyContent:'start'}}>{user.name}</div>
                        <div className="phone" style={{display:'flex',justifyContent:'start',fontSize:'14px'}}>{user.phone }</div>
                    </div>
                    
                    <div className="action" style={{display:'flex',flexDirection:'row'}}>
                        <div className="call" style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
<img src={Call} alt="" style={{width:'30px',height:'30px',cursor:'pointer' }} />
                        </div>
                        <div className="message" style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                            <img src={Message} alt="" style={{width:'30px',height:'30px',cursor:'pointer'}} />


                        </div>

                    </div>
                </div>
                
        </div>
        </>
  );
};

export default Contact;