'use client'
import React, { useState } from 'react';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const trackUsernameChange = (event: any) => {
    setUsername(event.target.value);
    checkButton();
  };

  const trackPasswordChange = (event: any) => {
    setPassword(event.target.value);
    checkButton();
  };

  const checkButton = () => {
    setIsButtonEnabled(username !== '' && password !== '');
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log('Submitting form:', username, password);
  };

  return (
    <div className="main">
      <h1>Admin Login</h1>
      <h3>Enter your login credentials</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first">Username:</label>
        <input
          type="text"
          id="first"
          name="first"
          placeholder="Enter your Username"
          required
          value={username}
          onChange={trackUsernameChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your Password"
          required
          value={password}
          onChange={trackPasswordChange}
        />
        <div className="wrap">
        <button
            id="login-button"
            type="submit"
            disabled={!isButtonEnabled} // Disable based on enabled state
            className={isButtonEnabled ? 'cursor-pointer' : ''} // Add class conditionally
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
