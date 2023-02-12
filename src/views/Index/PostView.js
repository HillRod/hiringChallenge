import React, { useContext, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { PostsContext } from "../../context/posts";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PostView() {

  //get the id from the url
  const { id } = useParams();
  //get the post from the context
  const { getPost, activePost, loading } = useContext(PostsContext);
  //show the post

  const navigate = useNavigate();


  useEffect(() => {
    getPost(id);
  }, [id]);

  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          {/*Material UI back icon*/}
          
          <h1><ArrowBackIcon onClick={() => navigate('/')} /> Post Detail</h1>
        </Col>
      </Row>
      <Row>
        {loading ? ('Loading...'
        ) : (
          <Col sm={12} key={activePost?.id} className="px-0" style={{height: '80vh'}}>
          <Card className="card">
            <Card.Img className="card-img" src={activePost?.img} alt="Bologna" style={{height: '80vh'}}/>
            <Card.ImgOverlay className="card-img-overlay text-white d-flex flex-column justify-content-center">
              <h4 className="card-title">{activePost?.title}</h4>
              <p className="card-text">{activePost?.body}</p>
              <p className="card-text">{activePost?.category}</p>
            </Card.ImgOverlay>
          </Card>
        </Col>
        )  
        }
      </Row>
    </Container>
  );
}