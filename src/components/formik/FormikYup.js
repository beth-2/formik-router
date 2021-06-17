import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { Div, Dv } from './Style.style'
import Button from '@material-ui/core/Button';

const FormikYup = () => {
  return (
    <div>
      <Formik
       initialValues={{
         name: '',
         email: '',
         agree: '',
       }}

       validationSchema={
         Yup.object({
           name: Yup.string().required('name field cannot be left blank'),
           email: Yup.string().email().required('email field cannot be left blan'),
           agree: Yup.boolean().required('conditions must be accepted')
       })}

       onSubmit={(values, { resetForm, setSubmitting }) =>{
        console.log(values);
        setTimeout(() => {
          setSubmitting(false)
          resetForm();
        }, 2000);
      }}
      >
        {
          ({values,
            errors, 
            handleSubmit, 
            handleReset, 
            handleChange, 
            handleBlur,
            dirty,
            isSubmitting,
            touched
          }) => (
          <Div>
            <form onSubmit={handleSubmit}>
              <br/>
              <TextField  
              id='name' 
              type='text' 
              onBlur={handleBlur}
              placeholder='enter name' 
              value={values.name} 
              onChange={handleChange}
              label="name" 
              variant="outlined" 
              /><br/>
              {
                errors.name && touched.name &&(
                  <Dv>{errors.name}</Dv>
                )
              }
             <br/>

              <TextField  
              id='email' 
              type='text' 
              placeholder='enter email' 
              value={values.email} 
              onChange={handleChange}
              onBlur={handleBlur}
              label="email" 
              variant="outlined" 
              /><br/>
              {
                errors.email && touched.email &&(
                  <Dv>{errors.email}</Dv>
                )
              }
              <br/>

              <Checkbox
              onChange={handleChange}
              id='agree'
              value={values.agree}
               color="primary"
               inputProps={{ 'aria-label': 'secondary checkbox' }}
              />
              <label
              htmlFor='agree'
              >I have read and accept the contract</label>
              <br/> 
              {
                errors.agree && touched.agree &&(
                  <Dv>{errors.agree}</Dv>
                )
              }
              <br/>

              <Button 
              type='submit'
              disabled={!dirty || isSubmitting}
              variant="contained" 
              color="primary">
                Login
              </Button>
             
            </form>
            </Div>
          )
        }
      </Formik>
    </div>
  )
}

export default FormikYup;