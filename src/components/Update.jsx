import React, { useState,useEffect } from "react";

const update = (props) => {
const [updateUser,setUpdateUser] = useState(null)
const [name,setName] = useState("Select User")
const [phone,setPhone]  = useState("select User")
    const {updateDisplay,handleUpdate,setUpdateDisplay,clicked,users} = props
    
   useEffect(() => {
    users.map(user=>{
      if(user.id === clicked){
        setName(user.name)
        setPhone(user.phone)
        

    }
    
  })
   }, [clicked]);
   
    const displayNone = (e) =>{
      
      setUpdateDisplay('none')
    }
    
  return(
    
    <div style={{display:updateDisplay,position:'absolute',top:'20%',left:'40%',width:'20%',height:'50%',backgroundColor:'white',borderRadius:'10px',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
<label for="name" style={{color:'black'}}>User Name </label>

<input type="text" style={{width:'70%'}} placeholder={name} name="name"  />
<label for="phone" style={{color:'black'}}>Phone </label>
<input type="tel" style={{width:'70%'}} placeholder={phone} name="phone" />
<div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:'20px',width:'80%'}}>
  <button style={{color:'white'}} onClick={()=>{displayNone();handleUpdate()}}>update</button>
<button style={{color:'white'}} onClick={(e)=>{displayNone(e)}}>cancel</button>
</div>

    </div>
    
  )
};

export default update;
