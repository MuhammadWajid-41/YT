'use client'
import React from "react"

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const page = () =>
{
  const notify = () => {
    //console.log("Helleo")
    toast("Login Successfull")
  }
  return (
    <>
    <div>
      <button onClick={notify} className="bg-green-500 px-4 py-2 mt-5 ml-5">Login</button>
      <ToastContainer/>
    </div>
    </>
  )
}
export default page


/*'use client'
import React, { useContext, useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import Header from "@/Components/Header"
import {MyContext} from "@/Helper/Context"

const page = () =>
{
  const user = useContext(MyContext)
  console.log(user)
  return (
    <>
    {user}
    <Header></Header>
    </>
  )
}
export default page*/

/*'use client'
import React, { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

const page = () =>
{
  const [users, setUsers] = useState([])
  const getUsers = async () => {
    //const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    //const data = res.data //OR {below}
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users")
    //console.log(data)
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  },[])
    return (
      <>
      <button onClick={getUsers} className="bg-green-500 text-white px-4 py-2 rounded font-bold">Get Data</button>
      <div className="p-8 bg-slate-100 mt-5">
        <ul>
        {users.map((e)=>{
       return <li>{e.username} --- <a href={`/${e.id}`}>Explore</a></li>
        })}
        </ul>
       
      </div>
      </>
    )
}
export default page*/




/*const page = () =>
{
  const [username, setUsername] = useState("")
    return (
      <>
      <h1 className="mb-5 text-2xl">Enter you name: </h1>
      <form>
        <input type="text" className="border-2 border-zinc-800 px-4 py-2 text-xl" 
        value={username}
        onChange={(e)=>{
          //console.log(e); //it is built-in function on typing letters trace and e is object
          //console.log(e.target);
          //console.log(e.target.value);
          setUsername(e.target.value)
          console.log(username);
          
        }}
        />
      </form>
      </>
    )
}
export default page*/