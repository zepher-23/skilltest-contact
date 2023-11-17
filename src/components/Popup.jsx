import React from "react";

const Popup = (props) => {
    //extracting the required variables from the props provided
    const {action,message,show,setShow} = props
    //function to close the snackbar
    const triggerClose =() =>{
       setShow(false) 
    }
    
    return (<>
    
        <div className="main" style={{display:show?"flex":"none",backgroundColor:'black',color:'white',padding:'10px'}}>
           {/* closes the snackbar when clicked */}
            <button onClick={triggerClose} style={{color:'white'}}>X</button>
            {/* message extracted from the props are displayed here */}
            <h5 style={{color:'white',margin:0,padding:"10px"}}>{message}</h5>
            

            
        </div>
    </>);
};

export default Popup;
