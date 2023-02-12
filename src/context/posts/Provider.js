import React, { useState } from 'react'
import { PostsContext } from "."
import { API } from "../../api/api"

export default function PostsProvider({ children }) {

  //Variables de estado
  //Array de posts
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  //post seleccionado
  const [activePost, setActivePost] = useState(null)

  const arrCategories = ['Travel', 'Lifestyle', 'Business', 'Food', 'Work'];

  const getPosts = async () => {
    setLoading(true)
    //Obtencion de datos de la API
    const { data } = await API.get('/posts');
    //Mappeado de datos agregando categorias y imagenes
    const posts = data.map(p => {
      return ({
        id: p.id,
        title: p.title,
        body: p.body,
        category: arrCategories[Math.floor(Math.random() * arrCategories.length)],
        img: `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 100000000 * p.id)}`,
      })
    })
    setPosts(posts);
    setLoading(false)
  }

  const getPost = async (id) => {
    setLoading(true)
    //Obtencion de datos de la API
    const { data } = await API.get(`/posts/${id}`);
    //Mappeado de datos agregando categorias y imagenes
    const post = {
      id: data.id,
      title: data.title,
      body: data.body,
      category: arrCategories[Math.floor(Math.random() * arrCategories.length)],
      img: `https://source.unsplash.com/random?sig=${Math.floor(Math.random() * 100000000 * data.id)}`,
    }
    setLoading(false)
    setActivePost(post)
  }

  const createPost = async (post) => {
    setLoading(true)
    //Llamada a la API para crear un post
    const { data } = await API.post('/posts', post);
    //Agregado de post al array de posts
    setPosts([data, ...posts]);
    setLoading(false)
  }


  return (
    <PostsContext.Provider value={{
      posts,
      getPosts,
      loading,
      createPost,
      arrCategories,
      getPost,
      activePost,
    }}>
      {children}
    </PostsContext.Provider>
  )
}