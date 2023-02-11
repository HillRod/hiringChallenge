import React, { useContext, useEffect } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { PostsContext } from "../../context/posts";
import Header from "./components/Header";

export default function Posts() {

  const { posts, getPosts, loading } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, []);

  return (

    <>
      <Header />
      <Container fluid>
        <Row>
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            posts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            ))
          )}

        </Row>
      </Container>
    </>
  );
}