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
    // debugger;
    const posts = data.map(p => {
      return ({
        id: p.id,
        title: p.title,
        body: p.body,
        topic: '',
        img: `https://source.unsplash.com/random?sig=${Math.floor(Math.random()*100000000*p.id)}`,
      })
    })
    setPosts(posts);
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