import React, { useContext, useEffect, useState } from "react";
import { Fab } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Container, Row, Col, Card } from "react-bootstrap";
import { PostsContext } from "../../context/posts";
import Header from "./components/Header";
import PostModal from "./components/PostModal";
import "./styles.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";

export default function Posts() {

  const { posts, getPosts, loading, setActivePost, activePost, deletePost, filteredPosts, setFilteredPosts } = useContext(PostsContext);
  const navigate = useNavigate();
  //state to control modal
  const [show, setShow] = useState(false);
  //handle close modal
  const handleClose = () => setShow(false);
  //handle open modal
  const handleShow = () => setShow(true);

  //state de filters
  const [filter, setFilter] = useState('All');
  

  const handleEdit = (e, post) => {
    e.stopPropagation();
    setActivePost(post);
    handleShow();
  }

  const handleDelete = (e, id) => {
    e.stopPropagation();
    deletePost(id);
  }



  const handleFilter = (filter) => {
    switch (filter) {
      case 'All':
        setFilteredPosts(posts);
        break;
      case 'Travel':
        setFilteredPosts(posts.filter(post => post.category === 'Travel'));
        break;
      case 'Food':
        setFilteredPosts(posts.filter(post => post.category === 'Food'));
        break;
      case 'Lifestyle':
        setFilteredPosts(posts.filter(post => post.category === 'Lifestyle'));
        break;
      case 'Work':
        setFilteredPosts(posts.filter(post => post.category === 'Work'));
        break;
      case 'Business':
        setFilteredPosts(posts.filter(post => post.category === 'Bussiness'));
        break;
      default:
        setFilteredPosts(posts);
    }
  }

  useEffect(() => {
    //Load posts when component is mounted
    getPosts();
  }, []);

  useEffect(() => {
    if(filter){
      handleFilter(filter);
    }
  }, [filter]);

  //Redirect to post detail
  const actionPost = (id) => {
    navigate(`/post/${id}`);
  }

  return (

    <>
      <ToastContainer />
      <PostModal show={show} handleClose={handleClose} post={activePost}/>
      <Fab onClick={handleShow} size="small" className="create-post" aria-label="add">
        <EditIcon />
      </Fab>
      <Header />
      <NavBar setFilter={setFilter} />
      <Container fluid>
        <Row>
          {loading ? (
            <Col sm={12}>
              <h1>Loading...</h1>
            </Col>
          ) : (
            <>

              {filteredPosts.map((post) => (
                <Col onClick={() => actionPost(post.id)}  sm={12} md={6} key={post.id} className="px-0">
                  <Card className="card">
                    <Card.Img className="card-img" src={post.img} alt="" />
                    <Card.ImgOverlay className="card-img-overlay text-white d-flex flex-column justify-content-center">
                      <h4 className="card-title">{post.title}</h4>
                      <p className="card-text">{post.body}</p>
                      <p className="card-text">{post.category}</p>
                      <div style={{ position: 'absolute', bottom: '30px', right: '30px' }}>
                          <EditIcon onClick={e => handleEdit(e, post)}/>
                          <DeleteIcon onClick={e => handleDelete(e, post.id)} className='m-3'/>
                      </div>
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