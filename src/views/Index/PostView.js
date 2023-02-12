import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { PostsContext } from "../../context/posts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Header from "./components/Header";

export default function PostView() {

  //get the id from the url
  const { id } = useParams();
  //get the post from the context
  const { getPosts, activePost, loading, posts, setActivePost, } = useContext(PostsContext);
  //show the post

  const navigate = useNavigate();


  useEffect(() => {
    //getPost(id);
    setActivePost(posts.find(post => post.id === parseInt(id)));
  }, [id]);

  return (
    <>
      <Header />
      <Container fluid >

        <Row className="justify-content-center">
          {loading ? ('Loading...'
          ) : (
            <Col sm={10} key={activePost?.id} className="px-0" style={{ height: '50vh' }}>
              <Card className="card">
                <Card.Img className="card-img" src={activePost?.img} alt="" style={{ height: '50vh' }} />
                <Card.ImgOverlay className="card-img-overlay text-white d-flex flex-column justify-content-center">
                  <h5 style={{ position: 'absolute', top: '10px' }}><ArrowBackIcon onClick={() => navigate('/')} /> View Posts</h5>
                  <h4 className="card-title text-center">{activePost?.title}</h4>
                  <p className="card-text text-center">{activePost?.category}</p>
                </Card.ImgOverlay>
              </Card>
                  <p className="card-text mt-3">{activePost?.body}</p>
            </Col>
          )
          }
        </Row>
      </Container>
    </>
  );
}