import { ADDENTRY,UPDATEENTRY,FINDENTRY,FINDALLENTRIES,DELETEENTRY } from "./action";
import axios from "axios";

export function addEntry(obj)
{
    axios.post('http://localhost:8082/additem',obj)
    .then((res)=>{
        console.log(res.data)
    })
    return (dispatch)=> {
        return axios.get("http://localhost:8082/additem")
        .then((res) => {
            return res.data
        }).then(data => {
            dispatch({
                type: ADDENTRY,
                payload: data
            })
        })
        .catch(err => {
            throw (err)
        })
    }
}

export function updateEntry(obj)
{
    axios.patch('http://localhost:8082/updateitem',obj)
    .then((res)=>{
        console.log(res.data)
    })
    
    return (dispatch)=> {
        return axios.get("http://localhost:8082/updateitem")
        .then((res) => {
            return res.data
        }).then(data => {
            dispatch({
                type: UPDATEENTRY,
                payload: data
            })
        })
        .catch(err => {
            throw (err)
        })
    }
}

export function findEntry(id)
{
    return {
        type: FINDENTRY,
        payload: id
    }
}

export function findALLEntries() 
{
    return (dispatch) => {
        return axios.get("http://localhost:8082/getitems")
            .then((res) => {
                return res.data
            }).then(data => {
                dispatch({
                    type: FINDALLENTRIES,
                    payload: data
                })
            })
            .catch(err => {
                throw (err)
            })
    }
}



export function deleteEntry(id)
{
    axios.delete(`http://localhost:8082/deleteitem/${id}`)
    .then((res)=>{
        console.log(res.data)
    })
    
    return (dispatch) => {
        return axios.get("http://localhost:8082/deleteitem")
        .then((res) => {
            return res.data
        }).then(data => {
            dispatch({
                type: DELETEENTRY,
                payload: data
            })
        })
        .catch(err => {
            throw (err)
        })
    }
}