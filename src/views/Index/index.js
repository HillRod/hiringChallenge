import React, { useContext, useEffect, useState } from "react";
import { Fab } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { Container, Row, Col, Card } from "react-bootstrap";
import { PostsContext } from "../../context/posts";
import Header from "./components/Header";
import PostModal from "./components/PostModal";
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Posts() {

  const { posts, getPosts, loading } = useContext(PostsContext);
  const navigate = useNavigate();
  //state to control modal
  const [show, setShow] = useState(false);
  //handle close modal
  const handleClose = () => setShow(false);
  //handle open modal
  const handleShow = () => setShow(true);

  useEffect(() => {
    //Load posts when component is mounted
    getPosts();
  }, []);

  //Redirect to post detail
  const actionPost = (id) => {
    debugger;
    navigate(`/post/${id}`);
  }

  return (

    <>
      <ToastContainer />
      <PostModal show={show} handleClose={handleClose} />
      <Fab onClick={handleShow} size="small" className="create-post" aria-label="add">
        <EditIcon />
      </Fab>
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
                <Col onClick={() => actionPost(post.id)}  sm={12} md={6} key={post.id} className="px-0">
                  <Card className="card">
                    <Card.Img className="card-img" src={post.img} alt="Bologna" />
                    <Card.ImgOverlay className="card-img-overlay text-white d-flex flex-column justify-content-center">
                      <h4 className="card-title">{post.title}</h4>
                      <p className="card-text">{post.body}</p>
                      <p className="card-text">{post.category}</p>
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