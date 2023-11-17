import React, {useState,useEffect} from "react";

const Add = (props) => {
  const [addUser,setAddUser] = useState(null)
  const [name,setName] = useState("Enter Name")
  const [phone,setPhone]  = useState("Enter Phone")
  const {addDisplay,action,handleAdd,setAddDisplay,clicked,users} = props
      
     //function to remove the popup
      const displayNone = (e) =>{
        
        setAddDisplay('none')
      }
      
    return(
      
      <div style={{display:addDisplay,position:'absolute',top:'20%',left:'40%',width:'20%',height:'50%',backgroundColor:'white',borderRadius:'10px',flexDirection:'column',alignItems:'center',justifyContent:'center' }}>
  <label for="name" style={{color:'black'}}>User Name </label>
  
  <input type="text" style={{width:'70%'}} placeholder={name} name="name"  />
  <label for="phone" style={{color:'black'}}>Phone </label>
  <input type="tel" style={{width:'70%'}} placeholder={phone} name="phone" />
  <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',padding:'20px',width:'80%'}}>
    <button style={{color:'white'}} onClick={()=>{displayNone();handleAdd()}}>{action}</button>
  <button style={{color:'white'}} onClick={(e)=>{displayNone(e)}}>cancel</button>
  </div>
  
      </div>
      
    )
};

export default Add;
