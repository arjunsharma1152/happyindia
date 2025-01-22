import logo from '../logo.jpg';
import './App.css';

const App = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <img src={logo} className='logo' />
        <p className='main-heading'>Let's make INDIA happy</p>
        <div style={{ marginTop: '20px' }}>
          <iframe
            src="https://www.youtube.com/embed/c874sI16YKc"
            title="Women handicraft competition" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen />
        </div>
      </div>
      <div className="suggestion-box">
        <h2>What steps can the government take to make the India happy once again?</h2>
        <h2>Add your suggestions here</h2>
        <textarea
          placeholder="Please enter the suggestions"
          className="textarea"
          rows="6"
        ></textarea>
        <button className="submit-button">Submit your suggestion</button>
      </div>
    </div>
  );
};

export default App;
