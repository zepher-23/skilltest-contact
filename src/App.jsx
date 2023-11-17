import { useState,useEffect } from 'react'

import './App.css'
import axios from "axios"
import Contact from './components/Contact'
import Add from "./assets/add.png"
import Delete from './assets/delete.png'
import Edit from './assets/editing.png'
import Popup from './components/Popup'
import AddPop from './components/Add'
import Update from './components/Update'

function App() {
  
  const [users, setUsers] = useState([]); //Holds user data fetched from the API
  const [clicked, setClicked] = useState(null) //Holds user clicked contact
  const [message, setMessage] = useState(null) // Holds message for the popup
  const [action, setAction] = useState(null) // Holds the type of action performed by the user
  const [show,setShow] = useState(false) //Triggers the snackbar after an operation
  const [display, setDisplay] = useState('none') // Toggles the display value of the popups

  //Code to fetch the contact details from the API
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching users:', error); //Throws an error when failed to fetch contact details
      }
    }

    fetchUsers();
  }, []);

  // Function to send an add request to the API
  const handleAdd = (event) => {
    setAction("Add")
    setMessage("Contact Added successfully!")

    //Dummy post request to add contact
    fetch("https://jsonplaceholder.typicode.com/users",{
      method:'POST',
      body:JSON.stringify({
        usernams:'john',
        phone:'9999999999'
      })
    }).then(response=>{
    if(response.ok){
      triggerShow()
    }
    else{
      throw new error("Server responded with failure to add contact!") //Throws error when failed to add new contact
    }
    }).catch(err=>{
      console.log(err)
    })
  
}

//Function to send delete request to the API
const handleDelete = (event) => {
  if(clicked===null){
    setMessage('Select contact!')
    triggerShow();
    return;
  }
  setAction("Delete")
  setMessage("Contact deleted successfully!")
  //Dummy delete request to delete a contact
  fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:'DELETE',
  }).then(response=>{
  if(response.ok){
    triggerShow()
  }
  else{
    throw new error("Server responded with failure to delete contact!") //Throws error when failed to delete contact
  }
  }).catch(err=>{
    console.log(err)
  })

}

//Function to send an update request to the API
const handleUpdate = (event) => {
  setAction("Update")
  setMessage("Contact updated successfully!")
  //Dummy update request to update a contact
  fetch("https://jsonplaceholder.typicode.com/users/1",{
    method:'PUT',
    body:JSON.stringify({
      usernams:'john',
      phone:'9999999999'
    })
  }).then(response=>{
  if(response.ok){
    triggerShow()
  }
  else{
    throw new error("Server responded with failure to update contact!") //Throws error when failed to update
  }
  }).catch(err=>{
    console.log(err)
  })

}


//Function to trigger update popup
const updatePop = () =>{
  setAction('Update')
setDisplay('flex');

}

//Function to trigger add popup
const addPop = () =>{
setAction('Add')
setDisplay('flex')

}


//function to toggle the popups
const triggerShow =()=>{
 setShow(true)
}


  return (
    <div>
      {/*______________________________ Main container of the UI___________________________ */}
      <div className="main" style={{ height: '90vh',minWidth:'350px', width: '30vw', backgroundColor: 'black',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'20px',flexDirection:'column' }}>


        <div className="container" style={{ height: '80%', width: '90%', backgroundColor: 'white' }}>
          {/* ________________________POPUPS____________________________ */}

        <Update display={display} action={action} handleUpdate={handleUpdate} setDisplay={setDisplay} clicked={clicked} users={users} />
       <AddPop display={display} action={action} handleAdd={handleAdd} setDisplay={setDisplay} clicked={clicked} users={users} />
       {/* _________________________________________________________POPUPS END__________________________________________________ */}
       
       {/*___________________________ Display screen of the UI___________________________ */}
          <div className="display" style={{ height: '90%',color:'black',overflowY:"scroll" }}>     


          
             {/*___________________Section for snackbar  */}
 <div style={{position:'fixed',top:'40%',left:'41.5%',display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                <Popup message={message } action={action} show={show} setShow={setShow} />
          </div>
          {/* ____________________snackbar end________________________ */}


{/* ________________________Section to display contact details____________________ */}
            <div>
              {users.map(user => (
                <div>
                  {/* ________contact component_______ */}
                  <Contact key={user.id} user={user} clicked={clicked} setClicked={setClicked} />
                  <hr style={{margin:'0px',backgroundColor:'black'}} />
                </div>
                  ))}
            </div>
{/* ____________________________contact section ends_____________________________ */}
          </div>
          

          {/* _________________________Function buttons________________________ */}
          <div className="buttons" style={{height:'10%',display:'flex',flexDirection:'row',backgroundColor:'gray',justifyContent:'space-evenly'}}>
            <div className="update" onClick={(e)=>{if(clicked===null)
              { 
                setMessage("select a contact!")
                triggerShow();
              }
              else updatePop()}} style={{ backgroundColor: '#fff4d6', width: '33%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> <img src={Edit} alt="" style={{ width: '30px', height: '30px' }} /> </div>
            <div className="add" onClick={(e)=>{addPop()}} style={{backgroundColor:'#fff4d6',width:'33%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} ><img src={Add} alt="" style={{width:'30px',height:'30px'}} /> </div>
            <div className="delete" onClick={(e)=>{handleDelete()}} style={{backgroundColor:'#fff4d6',width:'33%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}><img src={Delete} alt="" style={{width:'30px',height:'30px'}} /> </div>
          </div>
          {/* ________________________________function buttons end_____________________________ */}

        </div>
        <div className="power" style={{width:'100%',height:'50px',backgroundColor:'black'}}>
 
        </div>
      
      </div>

      


      
      
    </div>
  );
}

export default App
