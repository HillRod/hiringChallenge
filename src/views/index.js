import React, { useContext } from "react";
import { PostsContext } from "../context/posts";


export default function Posts() {

  const { posts, getPosts, loading } = useContext(PostsContext);

  getPosts();

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );
}