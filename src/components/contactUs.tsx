import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';

const theme = createTheme();

const ContactForm: React.FC = () => {

  const initialValues = {
    name: '',
    email: '',
    message: ''
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required')
  });

  const handleSubmit = async (values: any, { resetForm }: any) => {
    try {
      const response = await axios.post('/api/contact', values);
      console.log(response);
      resetForm();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name">
              {({ field, meta }: any) => (
                <TextField
                  {...field}
                  label="Name"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="email">
              {({ field, meta }: any) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Field name="message">
              {({ field, meta }: any) => (
                <TextField
                  {...field}
                  label="Message"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  multiline
                  rows={4}
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && meta.error}
                />
              )}
            </Field>
            <Button type="submit" variant="contained" color="primary" size="large">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </ThemeProvider>
  );
};

export default ContactForm;
