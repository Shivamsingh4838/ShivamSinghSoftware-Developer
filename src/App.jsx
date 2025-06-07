import './index.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">
        🚀 Meme Generator
      </h1>

      <div className="components-wrapper">
        <Random />
        <Tag />
      </div>

      <footer className="app-footer">
        Made with <span className="heart">❤️</span> by <strong>Shivam Singh</strong> · Powered by <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">Giphy API</a>
      </footer>
    </div>
  );
}

export default App;
