import React from 'react';
import { object, string, number } from 'yup';

import Form from './modules/organisms/Form/containers';
import './index.css'
import './App.css'
import Button from './modules/atoms/Button/components';
import RoundedImage from './modules/atoms/Image/components/RoundedImage';
import Flex from './modules/Layout/components/Flex';
import Column from './modules/Layout/components/Column';
import Image from './modules/atoms/Image/components';

function App() {

  const initialValues = {
    name: 'Keshav',
    phone: ''
  }

  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/
  const phoneRegex = /^(?:(?:\+|0{0,2})91(\s*[-]\s*)?|[0]?)?[6789]\d{9}$/

  const formSchema = object().shape({
    name: string().required('Enter the Name').matches(nameRegex, 'Invalid Name'),
    phone: number('Invalid Phone')
  })

  const submitHandler = (context) => {

    // context object has two fields -> event(Dom Event) and values(Form Fields Values)
    // code to submit the form
    
  }

  return (
    <>
    <Form 
      id='leadForm' 
      name='Lead Form'       
      className='mx-5 mt-3'
      validateOnSubmit={true}
      validateOnChange={true}
      initialValues={initialValues}
      validationSchema={formSchema}
      submitHandler={submitHandler}
    >
      <Form.Group>
        <Form.Input type='text' name='name' placeholder='Enter your Name' className='rounded-lg p-4' required />
        <Form.Feedback name='name' />
      </Form.Group>

      <Form.Group>
        <Form.Input type='number' name='phone' placeholder='Enter your Phone' className='rounded-lg p-4' required />
        <Form.Feedback name='phone' />
      </Form.Group>

      <Button type="submit" variant='primary' size='block' className='mt-4'>Book Now</Button>
    </Form>


    <Flex gap={4}>
      <Column width={3}>
        <RoundedImage 
        src='https://imagesx.practo.com/providers/88552925-3c16-4eaf-ba15-689083c94815.jpg?i_type=t_70x70' 
        className='mt-4 ml-4'
        width={92}
        height={92}
      />
      </Column>

      <Column width={6}>
        <p>Highly recommended by patients for explanation of treatment</p>
      </Column>

    </Flex>

    <Button variant='white' size='sm' className='ml-3 mt-3'>
        <Image 
          src='https://www-latest.practo.com/sapphire-assets/images/ic_call.324d17022c13.png' 
          width={12} 
          height={12} 
          className='mr-2'
        />
        08047092211
      </Button>
    </>
  );
}

export default App;
