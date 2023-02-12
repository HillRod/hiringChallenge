import React, { useContext, useEffect } from "react";
import { Container, Row, Navbar, Nav, Col, Card } from "react-bootstrap";
import { PostsContext } from "../../context/posts";
import Header from "./components/Header";
import "./styles.css";

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
            <Col sm={12}>
              <h1>Loading...</h1>
            </Col>
          ) : (
            <>
              
              {posts.map((post) => (
                <Col sm={12} md={6} key={post.id} className="px-0">
                <Card class="card">
                  <Card.Img class="card-img" src={post.img} alt="Bologna" />
                  <Card.ImgOverlay class="card-img-overlay text-white d-flex flex-column justify-content-center">
                    <h4 class="card-title">{post.title}</h4>
                    <p class="card-text">{post.body}</p>
                    <p class="card-text">{post.categorie}</p>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              ))}
            </>
          )}

        </Row>
      </Container>
    </>
  );
}