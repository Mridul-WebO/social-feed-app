/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import Slide from '@mui/material/Slide';
import { Avatar, Box, Container, TextField } from '@mui/material';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useForm } from 'react-hook-form';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CustomDialog({ openPostModal, setOpenPostModal }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    console.log({ data });
  };

  return (
    <React.Fragment>
      <Dialog
        open={openPostModal}
        TransitionComponent={Transition}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          <Container component="main" maxWidth="xs">
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar
                style={{ cursor: 'pointer' }}
                sx={{ mx: 25, width: 250, height: 100, borderRadius: 3 }}
                alt=" Sharp"
              >
                <CloudUploadIcon />
                <input
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  style={{ display: 'none' }}
                />
              </Avatar>

              <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="title"
                  label="Title"
                  name="title"
                  autoComplete="title"
                  autoFocus
                  {...register('title', { required: 'Title is required' })}
                  error={!!errors.title?.message}
                  helperText={errors.title?.message}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="description"
                  label="Description"
                  name="description"
                  autoComplete="description"
                  autoFocus
                  {...register('description', {
                    required: 'Description is required',
                  })}
                  error={!!errors.description?.message}
                  helperText={errors.description?.message}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create Post{' '}
                </Button>
              </Box>
            </Box>
          </Container>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenPostModal(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
