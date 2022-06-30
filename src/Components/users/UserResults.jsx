
import React from 'react'
import {useEffect, useState, useContext} from 'react'
import Spinner from '../layout/Spinner'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {
    
    // *Below code moved to Github Context
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(false)

    const {users, loading, fetchUsers} = useContext(GithubContext)


    // Removed as Fetchusers was made for testing purposes only
    // useEffect( () => {
        // Fetchusers was made for testing purposes only, in actual app, userlist would
        // come from form submission made by user
        // fetchUsers();
    // })

    // *Below code moved to Github Context
    // const fetchUsers = async () => {
    //     const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`,{
    //         headers : {
    //             Authorization : `${process.env.REACT_APP_GITHUB_TOKEN}`
    //         }
    //     })

    //     const data = await response.json();
    //     setUsers(data)
    //     setLoading(false)
    // }

    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 
            lg:grid-cols-3 md:grid-cols-2'>
                {users.map( (user) => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
      )
    }else{
        return <Spinner />
    }
  
}

export default UserResults