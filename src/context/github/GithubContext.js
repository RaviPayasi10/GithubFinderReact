// Alternate for Authorization
//  Authorization: `basic +${ process.env.REACT_APP_GITHUB_TOKEN}

import {createContext, useState, useReducer} from 'react'
import githubReducer from './GithubReducer';

const GithubContext = createContext();
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN


export const GithubProvider = ({children}) => {
    // * Removed due to useReducers - 
    // const [users, setUsers] = useState([])
    // const [loading, setLoading] = useState(false)

    const initialState = {
        users: [],
        user:{},
        repos:[],
        loading: false, // Earlier it was true for testing purposes, along with fetch
        // Now it is set to false
    }

    const [state, dispatch] = useReducer(githubReducer, initialState)

    // For searching users - 
    const searchUsers = async (text) => {
        setLoading();

        const params = new URLSearchParams({
            q: text
        })

        const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
            headers:{
                Authorization : `${GITHUB_TOKEN}`
            }
        })

        const {items} = await response.json();
        dispatch({
            type: 'GET_USERS',
            payload:items,
        })
    }

    // Get single user
    const getUser = async (login) => {
        setLoading();

        const response = await fetch(`${GITHUB_URL}/users/${login}`,{
            headers:{
                Authorization : `${GITHUB_TOKEN}`
            }
        })

        if(response.status === 404){
            window.location = '/notfound'
        }else{
            const data = await response.json();
            dispatch({
                type: 'GET_USER',
                payload:data,
        })
        }
    }

    // Get user repos
    const getUserRepos = async (login) => {
        setLoading();

        const params = new URLSearchParams({
            sort: 'created',
            per_page: 10
        })
        const response = await fetch(`${GITHUB_URL}/users/${login}/repos?${params}`, {
            headers: {
                Authorization: `${GITHUB_TOKEN}`
            }
        })

        const data = await response.json();

        dispatch({
            type:'GET_REPOS',
            payload: data
        })
    }

    // Clear Users 
    const clearUsers = () => {
        dispatch({
            type:'CLEAR_USERS',

        })
    }

    // Get initial users ( For testing purposes )
    const fetchUsers = async () => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users`,{
            headers : {
                Authorization : `${GITHUB_TOKEN}`
            }
        })

        const data = await response.json();
        dispatch({
            type:'GET_USERS',
            payload: data,
        })

        // * Removed due to useReducers
        // setUsers(data)
        // setLoading(false)
    }

    // For loading symbol to be shown just before loading the lists - 
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })


    return <GithubContext.Provider value={{
        // * Removed due to useReducers
        // users,
        // loading,
        // fetchUsers

        users: state.users,
        user:state.user,
        repos:state.repos,
        loading: state.loading,
        fetchUsers,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos
    }}>
        {children}
    </GithubContext.Provider>
}

export default GithubContext