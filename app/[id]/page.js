"use client"
import React, { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

const page = ({params}) =>
{
    const {id} = params;

    const [users, setUsers] = useState([])
  const getUsers = async () => {
    //const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    //const data = res.data //OR {below}
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
    setUsers(data)
  }
  useEffect(() => {
    getUsers()
  },[])

    //console.log(params)
    return (
        <>{JSON.stringify(users)}</>
    )
}
export default page