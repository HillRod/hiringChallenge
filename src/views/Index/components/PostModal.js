import React, { useContext, useEffect, useState } from 'react';
import { PostsContext } from '../../../context/posts';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Container, Row } from 'react-bootstrap';
import { TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { toast } from 'react-toastify';

export default function PostModal({ post, show, handleClose }) {

  const { arrCategories, createPost, editPost } = useContext(PostsContext);

  //form state
  debugger;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [imgUrl, setImgUrl] = useState('');

  const handleCloseModal = () => {
    setTitle('');
    setDescription('');
    setCategory('');
    setImgUrl('');
    handleClose();
  }

  useEffect(() => {
    if (post) { 
      setTitle(post.title);
      setDescription(post.body);
      setCategory(post.category);
      setImgUrl(post.img);
    }
  }, [post]);

  const ValidateForm = () => {
    //regex to validate url
    const regex = new RegExp('^(https?:\\/\\/)?' + // protocol 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    if (title === '' || description === '' || category === '' || imgUrl === '' || !regex.test(imgUrl)) {
      return false;
    }
    return true;
  }

  const handleSave = async () => {
    if (!ValidateForm()) {
      toast.warning('Please fill all the fields correctly');
      return;
    }
    if (post) {//Is editing
      editPost({ id: post.id, title, body: description, category, img: imgUrl})
    } else {//Is creating
      await createPost({ title, body: description, category, img: imgUrl });
    }
    handleCloseModal();
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton={false} className='justify-content-center'>
        <Modal.Title>{post ? 'Edit Post' : 'Create Post'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <TextField value={title} onChange={(e) => setTitle(e.target.value)} className='my-3' fullWidth id="filled-basic" label="Title" variant="filled" />
              <TextField value={description} onChange={(e) => setDescription(e.target.value)} className='my-3' fullWidth id="filled-basic" label="Description" variant="filled" />
              <FormControl fullWidth className='my-3'>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {arrCategories.map((categorie, i) => (
                    <MenuItem key={i} value={categorie}>{categorie}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className='my-3' fullWidth id="filled-basic" label="URL of the image" variant="filled" />
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer className='justify-content-around'>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}