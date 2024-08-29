// // Onebox.js
// import React, { useEffect, useRef, useState } from 'react';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css'; // Import Quill styles
// import '../assets/styles/Onebox.css';
// const Onebox = () => {
//   const [editorContent, setEditorContent] = useState('');
//   const editorRef = useRef(null);

//   // Handler for keyboard shortcuts
//   const handleKeyDown = (event) => {
//     switch (event.key) {
//       case 'd':
//         deleteContent();
//         break;
//       case 'r':
//         replyToContent();
//         break;
//       default:
//         break;
//     }
//   };

//   // Delete content handler
//   const deleteContent = () => {
//     setEditorContent('');
//     console.log('Content deleted');
//   };

//   // Reply content handler
//   const replyToContent = () => {
//     // Implement your reply logic here
//     console.log('Replying to content');
//   };

//   // Use effect to attach and clean up event listeners
//   useEffect(() => {
//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, []);

//   return (
//     <div className="onebox-container">
//       <h1>Onebox Screen</h1>
//       <ReactQuill
//         ref={editorRef}
//         value={editorContent}
//         onChange={setEditorContent}
//         theme="snow"
//       />
//       <button onClick={deleteContent}>Delete</button>
//       <button onClick={replyToContent}>Reply</button>
//     </div>
//   );
// };

// export default Onebox;
import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import '../assets/styles/Onebox.css';

const Onebox = () => {
  const [editorContent, setEditorContent] = useState('');
  const editorRef = useRef(null);

  // Handler for keyboard shortcuts
  const handleKeyDown = useCallback((event) => {
    switch (event.key) {
      case 'd':
        deleteContent();
        break;
      case 'r':
        replyToContent();
        break;
      default:
        break;
    }
  }, []); // Empty dependency array, as the function does not depend on any external values

  // Delete content handler
  const deleteContent = () => {
    setEditorContent('');
    console.log('Content deleted');
  };

  // Reply content handler
  const replyToContent = () => {
    // Implement your reply logic here
    console.log('Replying to content');
  };

  // Use effect to attach and clean up event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]); // Include handleKeyDown in the dependency array

  return (
    <div className="onebox-container">
      <h1>Onebox Screen</h1>
      <ReactQuill
        ref={editorRef}
        value={editorContent}
        onChange={setEditorContent}
        theme="snow"
      />
      <button onClick={deleteContent}>Delete</button>
      <button onClick={replyToContent}>Reply</button>
    </div>
  );
};

export default Onebox;
