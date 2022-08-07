import React,{useState} from 'react';
import {Form,Button} from 'react-bootstrap';

const UpdatePlaceForm = props => {

    
    const {title , description} = props
    
    const [validated, setValidated] = useState(false);
    const [newtitle , setTitle] = useState(title);
    const [newdescription,setDesc] = useState(description);

    const NEW_DATA = [
        {
            title : newtitle,
            description : newdescription
        }
    ]


    
    const handleSubmit = event => {
        const form = event.currentTarget;
        
        if (form.checkValidity() === false) {
          event.preventDefault();
        event.stopPropagation();
        }else{
          event.preventDefault(); 
          console.log(NEW_DATA);
        }
        setValidated(true);
      };

   return( 
    <>
    
   <Form noValidate validated = {validated} onSubmit = {handleSubmit}>
   
<Form.Control required type="text" value={newtitle} onChange={event => setTitle(event.target.value)} minLength={5} maxLength={86}/>
 <Form.Control.Feedback type='invalid' >Needed Field/Title here/Min 5 Characrters</Form.Control.Feedback>
   <hr/>
<Form.Control required row = {3} value = {newdescription} onChange={event => setDesc(event.target.value)} as="textarea"  minLength={5} />
<Form.Control.Feedback type='invalid' >Needed Field/Description here</Form.Control.Feedback>
    <hr/>
    <div>
        <Button type="submit" variant="secondary" size="md">Apply Changes</Button>
    </div>
   </Form>
   </>
    )
}

export default UpdatePlaceForm;