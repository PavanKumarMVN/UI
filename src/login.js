import { Button, Paper } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './style.css'
import Registration from "./registration";

function Login()
{
    const [userId,setUserId] = useState('')
    const [password,setPassword] = useState('')
    const [status,setStatus] = useState('')
    const navigate = useNavigate()

    return (<>
    <div class = "container" style = {{position:"relative",marginLeft:-600,marginRight:300,top:-50}}>
    <h1> Login Page </h1>

            <div class = "form-control">
            <label>Enter User Id</label><br/>
                <input type = 'text' onChange={(e)=>{
                    setUserId(e.target.value)
                }}/>
                </div>

                <div class = "form-control">
                <label>Enter Password</label><br/>
                <input type = 'password' onChange={(e)=>{
                    setPassword(e.target.value)
                }}/>
                </div>

                <button class = 'btn' onClick={()=>{
                    axios.get(`http://localhost:8082/finduser/${userId}`)
                    .then((res)=>{
                        var data = res.data
                        if(data.role==="admin")
                        {
                            if(data.userEmail===userId && data.password===password)
                            {
                               sessionStorage.setItem("username",data.userEmail)
                               navigate("/home")
                            }
                            else
                            {
                                setStatus("invalid details")
                            }
                        }
                        else if(data.role === "user")
                        {
                            if(data.userEmail===userId && data.password===password)
                            {
                               sessionStorage.setItem("username",data.userEmail)
                               navigate("/home")
                            }
                            else
                            {
                                setStatus("invalid details")
                            }
                        }
                        else
                        {
                            setStatus("Invalid Details")
                        }
                    })
                }}>Login</button>
                <p class = 'text'>Don't have an account? <Link to = "/Registration" style={{marginLeft:10,fontSize:18}}>Register</Link></p>
                {status}
    </div>
   </>)   
}

export default Login;