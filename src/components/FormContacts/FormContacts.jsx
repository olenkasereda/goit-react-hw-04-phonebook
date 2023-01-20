import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import 'yup-phone';
import { PropTypes } from 'prop-types';

import {
  ContactForm,
  ButtonAdd,
  InputError,
  FormInput,
  FormLabel,
} from './FormContact.styled.js';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Your name is too short')
    .required('Please enter full name'),
  number: yup.string().required('Please enter number').phone('UA', true),
});

const initialValues = {
  name: '',
  number: '',
};

const FormContacts = props => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, number } = values;
    props.addContact({ name: name, number: number });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <ContactForm autoComplete="off">
        <FormLabel>
          Name
          <FormInput placeholder="Full name" type="text" name="name" />
          <ErrorMessage name="name" component={InputError} />
        </FormLabel>
        <br />
        <FormLabel>
          Number
          <FormInput
            placeholder="Phone number: +380..."
            type="tel"
            name="number"
          />
          <ErrorMessage name="number" component={InputError} />
        </FormLabel>
        <ButtonAdd type="submit">Submit</ButtonAdd>
      </ContactForm>
    </Formik>
  );
};

FormContacts.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default FormContacts;
