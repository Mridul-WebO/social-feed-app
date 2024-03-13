import { Button, Container } from '@mui/material';
import Post from '../../components/Post';
import { useState } from 'react';
import CustomDialog from '../../components/CustomDialog';
import CustomAppBar from '../../components/CustomAppBar';

const HomePage = () => {
  const [openPostModal, setOpenPostModal] = useState(false);

  const handleCreatePost = () => {
    setOpenPostModal(true);
  };

  return (
    <>
      <CustomAppBar />
      <Container component="main" maxWidth="xs" sx={{ mt: 8 }}>
        <Button
          variant="contained"
          sx={{ my: 5, ml: 15 }}
          onClick={handleCreatePost}
        >
          +Create Post
        </Button>
        {/* <Paper style={{ maxHeight: 500, minWidth: 500, overflow: 'auto' }}> */}
        {/* <List> */}
        <Post />

        {/* </List> */}
        {/* </Paper> */}
      </Container>
      <CustomDialog
        openPostModal={openPostModal}
        setOpenPostModal={setOpenPostModal}
      />
    </>
  );
};

export default HomePage;
