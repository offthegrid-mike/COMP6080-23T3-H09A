import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <div>
      <button onClick={() => setCurrentPage("Home")}>Home</button>
      <button onClick={() => setCurrentPage("Pricing")}>Pricing</button>
      <button onClick={() => setCurrentPage("FAQ")}>FAQ</button>
      <button onClick={() => setCurrentPage("Library")}>Library</button>
      {
        currentPage === "Home" ?
          <div>
            Home page
          </div>
          :
          <></>
      }
      {
        currentPage === "Pricing" ?
          <div>
            Pricing page
          </div>
          :
          <></>
      }
      {
        currentPage === "FAQ" ?
          <div>
            FAQ page
          </div>
          :
          <></>
      }
      {
        currentPage === "Library" ?
          <div>
            Library page
          </div>
          :
          <></>
      }
    </div>

  );
}

export default App;
