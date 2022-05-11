import { Paper } from "@mui/material";
import { useState } from "react";
import './style.css'

function Registration()
{
    // const [firstName,setFirstName] = useState('')
    // const [lastName,setLastName] = useState('')
    // const [userEmail,setUserEmail] = useState('')
    // const [password,setPassword] = useState('')
    // const [cPassword,setcPassword] = useState('')
    // const [firstErr,setFirstErr] = useState('')
    // const [secondErr,setSecondErr] = useState('')
    // const [passwordErr,setPasswordErr] = useState('')

    return (<>
    <div class = "container1" style = {{position:"relative",marginLeft:-600,marginRight:300}}>
        <h1 style={{textAlign:'center'}}>Registration Page</h1>
        {/* <form onSubmit={(e)=>{
            e.preventDefault()
            var User = {
                "firstName":first,
                "lastName":second,
                "userEmail":email,

            }
        }} */}

        <div class = "form-controls">
            <label>First Name</label>
            <input type="text"/>
        </div>
        <div class = "form-controls">
            <label>Last Name</label>
            <input type="text"/>
        </div>
        
        <div class = "form-controls">
            <label>Email</label>
            <input type="email"/>
        </div>
            
        <div class = "form-controls">
            <label>Password</label>
            <input type="Password"/>
        </div>

        <div class = "form-controls">
            <label>Confirm Password</label>
            <input type="password"/><br/>
        </div>
            
            <label style={{fontSize:18}}>Gender</label>
            <label style={{marginLeft:35}}>Male</label>
            <input type="radio" name="gender" id="male"/>
            <label style={{marginLeft:15}}>Female</label>
            <input type="radio" name="gender" id="female"/><br/><br/>
            
            <button class="btn btn-primary">LOGIN</button>
        {/* </div> */}

    </div>
    </>)
}

export default Registration;