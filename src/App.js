import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link,Navigate,Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { Paper } from '@mui/material';
import ErrorBoundry from './errorboundry';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './style.css'

function App() 
{
  var navigate = useNavigate()
  var user=sessionStorage.getItem("username")
  if(user!=null)
  {
    console.log(user)
    return (
      <>
        <AppBar position = "fixed">
          <Toolbar>
            <Avatar variant = "square">
              {user.slice(0,2).toUpperCase()}
            </Avatar>
            <Typography style={{marginLeft:10}}>
              My Sample Project
            </Typography>
            <Button  variant = "contained" onClick={()=>{
              sessionStorage.clear()
              navigate("/")
            }}>Logout</Button>

          </Toolbar>
        </AppBar>

        <div style = {{position:'relative',top:200}}>
          <Paper elevation={15}>
            <ErrorBoundry>
                <Outlet/>
            </ErrorBoundry>
          </Paper>
        </div>
      </>
    );
  }
  else
  {
    navigate("/")
    return <h1>To access page login first</h1>
  }
}

export default App;
