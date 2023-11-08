import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/post/:id" element={<PageTwo />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
