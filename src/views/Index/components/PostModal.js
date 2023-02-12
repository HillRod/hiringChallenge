import React, { useContext } from 'react';
import { PostsContext } from '../../../context/posts';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

export default function PostModal({ post, show, handleClose }) {

  const { arrCategories } = useContext(PostsContext);

  //form state

  const handleSave = () => {
    if (post) {//Is editing

    } else {//Is creating

    }
  }

  return (
    <Modal show={true} onHide={handleClose} centered>
      <Modal.Header closeButton={false} className='justify-content-center'>
        <Modal.Title>{post ? 'Edit Post' : 'Create Post'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <TextField className='my-3' fullWidth id="filled-basic" label="Title" variant="filled" />
              <TextField className='my-3' fullWidth id="filled-basic" label="Description" variant="filled" />
              <FormControl fullWidth className='my-3'>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  // value={age}
                  label="Category"
                // onChange={handleChange}
                >
                  {arrCategories.map((categorie, i) => (
                    <MenuItem key={i} value={categorie}>{categorie}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField className='my-3' fullWidth id="filled-basic" label="URL of the image" variant="filled" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='justify-content-around'>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}