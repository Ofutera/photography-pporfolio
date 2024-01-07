import React, { useState } from 'react';
import {imageData} from '../images';
import {
  Modal,
  Fade,
  Paper,
  Box,
  ImageList,
  ImageListItem
} from '@mui/material';

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ width: '99vw', height: '100vh', margin: '0 auto'}}>
        <ImageList variant="masonry" cols={3} gap={8}>
          {imageData.map((image) => (
            <ImageListItem key={image.img} onClick={() => handleOpen(image.img)} sx={{cursor: 'pointer'}}>
              <img
              srcSet={`${image.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${image.img}?w=248&fit=crop&auto=format`}
              alt={image.title}
              loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Fade in={open} timeout={{ enter: 1000, exit: 0 }}>
          <Paper
            sx={{
              maxWidth: '100%', 
              height: '90%',
              overflow: 'auto',
              backgroundColor: 'background.paper',
              boxShadow: 5,
              padding: 0,
            }}
          >
            <img
              src={selectedImage}
              alt="Full-width"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
            />
          </Paper>
        </Fade>
      </Modal>
    </>
  );
};

export default Gallery;
