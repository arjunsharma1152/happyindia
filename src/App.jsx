import React, { useState, useEffect } from 'react';
import logo from '../logo.jpg';
import './App.css';

const App = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');

  // Fetch the YouTube video URL when the component loads
  useEffect(() => {
    fetch('https://happyindiaback.onrender.com/fetchdata')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setVideoUrl(data.data.replace('youtu.be/', 'www.youtube.com/embed/'));
        }
      })
      .catch((error) => console.error('Error fetching video URL:', error));
  }, []);

  const handleSubmit = () => {
    if (textareaValue.trim() !== '') {
      const newSuggestion = { data: textareaValue };

      // Post the suggestion to the specified endpoint
      fetch('https://happyindiaback.onrender.com/appendData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSuggestion),
      })
        .then((response) => {
          if (response.ok) {
            setSuggestion(textareaValue); // Store the suggestion
            setTextareaValue(''); // Clear the textarea
            setIsSubmitted(true);

            // Reset isSubmitted after 3 seconds
            setTimeout(() => {
              setIsSubmitted(false);
            }, 3000);
          } else {
            console.error('Error posting suggestion:', response.statusText);
          }
        })
        .catch((error) => console.error('Error posting suggestion:', error));
    }
  };

  return (
    <div className="main-container">
      <div className="container">
        <img src={logo} className="logo" alt="Logo" />
        <p className="main-heading">Let's make INDIA happy</p>
        <div style={{ marginTop: '20px' }}>
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="Women handicraft competition"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <p>Loading video...</p>
          )}
        </div>
      </div>
      <div className="suggestion-box">
        <h2>What steps can the government take to make India happy once again?</h2>
        <h2>Add your suggestions here</h2>
        <textarea
          placeholder="Please enter the suggestions"
          className="textarea"
          rows="6"
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
        ></textarea>
        <button
          className="submit-button"
          style={{
            backgroundColor: isSubmitted ? 'green' : '',
            color: isSubmitted ? 'white' : '',
          }}
          onClick={handleSubmit}
        >
          {isSubmitted ? 'Submitted' : 'Submit your suggestion'}
        </button>
      </div>
    </div>
  );
};

export default App;
