// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../assets/styles/Login.css'; // Assuming you have a separate CSS file for styling

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!email || !password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     try {
//       // Example API call for login
//       const response = await fetch('https://yourapi.com/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('token', data.token);
//         navigate('/google-login');
//       } else {
//         setError('Invalid email or password.');
//       }
//     } catch (error) {
//       setError('Something went wrong. Please try again.');
//     }
//   };

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         {error && <p className="error">{error}</p>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
// // Login.js
// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';
// // // import './Login.css'; // Ensure this file is imported for component-specific styles
// // import '../assets/styles/Login.css'; // Assuming you have a separate CSS file for styling

// // const Login = () => {
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     // Implement your login logic here
// //     // After successful login, redirect to the Onebox screen
// //     navigate('/google-login');
// //   };

// //   return (
// //     <div className="login-container">
// //       <h2>Login</h2>
// //       <button onClick={handleLogin}>Login</button>
// //     </div>
// //   );
// // };

// // export default Login;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css'; // Ensure this file exists and is properly configured

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/google-login');
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
