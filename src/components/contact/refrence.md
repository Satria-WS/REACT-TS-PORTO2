mport React, { useState } from 'react';

const FormValidationExample = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');

const result = (name, email) => {
const nameReg = /^[a-zA-Z0-9_-]+$/;
    const emailReg = /^[^\s@]+@[^s\@]+\.[^\s@]+$/;

    return {
      nameReg: nameReg.test(name),
      emailReg: emailReg.test(email),
    };

};

const validationData = (name, email) => {
const { nameReg, emailReg } = result(name, email);
return [nameReg, emailReg];
};

const validateForm = () => {
let isValid = true;

    if (name.trim() === '') {
      setNameError('Name is required');
      isValid = false;
    } else if (!validationData(name, email)[0]) {
      setNameError('Invalid name format');
      isValid = false;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else if (!validationData(name, email)[1]) {
      setEmailError('Invalid email format');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;

};

const handleSubmit = (e) => {
e.preventDefault();

    if (validateForm()) {
      // Valid form, perform further actions (e.g., submit data to server)
      console.log('Form submitted:', name, email);
    }

};

return (

<form onSubmit={handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
{nameError && <span className="error">{nameError}</span>}
</div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>

);
};

export default FormValidationExample;

<!-- //////////////////////////////////////////////////////////////////////////////// -->

import React, { useState } from 'react';
import { validationData } from './validationUtils';

const FormValidationExample = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');

const handleSubmit = (e) => {
e.preventDefault();

    const [isNameValid, isEmailValid] = validationData(name, email);

    if (isNameValid && isEmailValid) {
      // Valid form, perform further actions (e.g., submit data to server)
      console.log('Form submitted:', name, email);
    } else {
      // Update error messages
      setNameError(isNameValid ? '' : 'Invalid name');
      setEmailError(isEmailValid ? '' : 'Invalid email address');
    }

};

return (

<form onSubmit={handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
{nameError && <span className="error">{nameError}</span>}
</div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>

);
};

export default FormValidationExample;

<!-- //////////////////////////////////////////////////////////////////////////////// -->

import React, { useState } from 'react';

const FormValidationExample = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [nameError, setNameError] = useState('');
const [emailError, setEmailError] = useState('');

const validateForm = () => {
let isValid = true;

    const { nameReg, emailReg } = validationData(name, email);

    if (!nameReg) {
      setNameError('Name is invalid');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!emailReg) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }

    return isValid;

};

const handleSubmit = (e) => {
e.preventDefault();

    if (validateForm()) {
      // Valid form, perform further actions (e.g., submit data to server)
      console.log('Form submitted:', name, email);
    }

};

const validationData = (name, email) => {
const nameReg = /^[a-zA-Z0-9_-]+$/;
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return {
      nameReg: nameReg.test(name),
      emailReg: emailReg.test(email),
    };

};

return (
<form onSubmit={handleSubmit}>
<div>
<label htmlFor="name">Name:</label>
<input
type="text"
id="name"
value={name}
onChange={(e) => setName(e.target.value)}
/>
{nameError && <span className="error">{nameError}</span>}
</div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>

);
};

export default FormValidationExample
