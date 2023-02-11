import React, { useState } from 'react'
import { PostsContext } from "."
import { API } from "../../api/api"

export default function PostsProvider({ children }) {

  //Variables de estado
  //Array de posts
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  //post seleccionado
  //const [activePost, setActivePost] = useState(null)


  const getPosts = async () => {
    const { data } = await API.get('/posts');
    console.log(data)
  }


  return (
    <PostsContext.Provider value={{
      posts,
      getPosts,
      loading,
    }}>
      {children}
    </PostsContext.Provider>
  )
}