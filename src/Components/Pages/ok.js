import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './usersSlice';

const SignUpForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.users.isLoading);
  const error = useSelector(state => state.users.error);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser(formData));
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit" disabled={isLoading}>Registrar</button>
      {error && <p>Error: {error}</p>}
    </form>
  );
};

export default SignUpForm;