import { useEffect, useState } from "react"
import { dataCurrent } from "../../database/users"


export const Profile = () => {
    const [current, setCurrent] = useState({})
    useEffect(() => {
        dataCurrent().then((res) => {
            setCurrent(res)
        })
    }, [])

  return (
    <>
        <span>My Profile</span>
        <p>{current.full_name}</p>
        <p>{current.email}</p>
        <p>{current.rol}</p>
    </>
  )
}

