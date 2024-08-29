
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Onebox from './components/Onebox';
// import './App.css'; // Ensure this file is imported for global styles

// const App = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <Router>
//       <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
//         <header>
//           <h1>My Application</h1>
//           <button onClick={toggleTheme}>
//             Switch to {darkMode ? 'Light' : 'Dark'} Mode
//           </button>
//         </header>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/google-login" element={<Onebox />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// App.js
import React, { useState } from 'react';
import Onebox from './components/Onebox';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? 'dark' : 'light'}`}>
      <header>
        <h1>ReachInBox.ai</h1>
        <button onClick={toggleTheme}>
          Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </header>
      <main>
        <Onebox />
      </main>
    </div>
  );
};

export default App;
