import React from 'react';
import { useFormik} from 'formik';
import TextField from '@material-ui/core/TextField/TextField';
import {useDispatch,useSelector} from 'react-redux';
import { StoreState } from '../../store/createStore';
import { contactRequest } from '../../store/modules/ContatcForm/actions';
import { Contact } from '../../store/modules/ContatcForm/types';
import { Box, Button, Grid } from '@material-ui/core';


const ContactForm : React.FC = () =>{
  const {loadingForm,contact,error,success} = useSelector((state : StoreState)=> state.form);
  
  const dispatch = useDispatch();
  const formik = useFormik<Contact>({
    initialValues : contact,
    onSubmit : handle
  })

  
  function handle(values: Contact){
    dispatch(contactRequest(values))
    formik.resetForm()
  }
  
  return(
    <div>

    <Grid 
      container
      direction="row"
      justify="center"
      alignItems="center"
      >
      <Grid  item xs={12} sm={6}>
        <form onSubmit = {formik.handleSubmit}>
        <Grid  item xs={12}>
          <TextField 
            margin = "normal"
            name = 'name'
            onChange={formik.handleChange}
            label = "Name"
            value={formik.values.name}
            variant="outlined"
            error = {error}
            />
          </Grid>
        <Grid item xs={12}>
          <TextField
            margin = "normal"
            name = 'email'
            type="email"
            label = "E-mail"
            onChange={formik.handleChange}
            value={formik.values.email}
            variant="outlined"
            error = {error}
            />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin = "normal"
            name = 'message'
            label = "Message"
            onChange={formik.handleChange}
            value={formik.values.message}  
            variant="outlined"
            error = {error}
            />
        </Grid>
        <Grid item xs={12}>
         {
           
           loadingForm 
           ?  <Button  variant = "outlined" type = "submit">
             loading ..
              </Button>
              
              : success 
              ? <Button color ="primary" variant = "outlined" type = "submit">
                  Send
                </Button>
              : <Button  variant = "outlined" type = "submit">
                  Send
                </Button>
             
            }
        </Grid>
       </form>
     </Grid>
      <Grid  item xs={12} sm={6}>
        <p>
          Conatact  {JSON.stringify(contact)}
        </p>
        <p>
          Error  {JSON.stringify(error)}
        </p>
        <p>
          Loading  {JSON.stringify(loadingForm)}
        </p>
      </Grid>
    </Grid>
  </div>
  )
}

export default ContactForm;