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
//////////////////////////////////////////////////////////////////////

const sendEmail = async (e: any) => {
e.preventDefault();

if (!isNameValid) {
handleNameError();
return;
}

if (!isEmailValid) {
handleEmailError();
return;
}

setLoading(true);
const loadingToastId = toast.loading("Sending...");

try {
const result = await emailjs.sendForm(
"service_o8aw3wd",
"template_rmw4f5c",
form.current,
"C9K36uwheVoFbeM2A"
);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    e.target.reset();
    console.log(result.text);
    console.log("Send successful");
    toast.success("Email sent successfully");

} catch (error: any) {
console.log(error.text);
} finally {
toast.dismiss(loadingToastId);
setLoading(false);
}

console.log("Submitted:", name, email);
};

const handleNameError = () => {
if (spamClickCount < 3) {
setSpamClickCount(spamClickCount + 1);
toast.error("Name invalid", {
duration: 1000,
});
} else {
toast.error("Name input is invalid. Please wait for 3 seconds", {
duration: 3000,
});
setSpamClickCount(0);
setButtonDisabled(true);

    const timeout = setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);

}

console.log("Name invalid");
};

const handleEmailError = () => {
if (spamClickCount < 3) {
setSpamClickCount(spamClickCount + 1);
toast.error("Email invalid", {
duration: 1000,
});
} else {
toast.error("Email input is invalid. Please wait for 3 seconds", {
duration: 3000,
});
setSpamClickCount(0);
setButtonDisabled(true);

    const timeout = setTimeout(() => {
      setButtonDisabled(false);
    }, 3000);

}

console.log("Email invalid");
};
