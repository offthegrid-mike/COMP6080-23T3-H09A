import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';

import './style.css';

let timeoutID = null;

function App() {
  const [usernames, setUsernames] = useState([]);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const requests = usernames.map(username => fetch(`https://api.github.com/users/${username}`)
    );
    Promise.allSettled(requests)
    .then(responses => Promise.all(responses.map(response => response.value.json())))
    .then(data => data.filter(user => user.name))
    .then(data => {
      setUserData(data)}
    )

  }, [usernames]);

  const updateNames = (evt) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      setUsernames(evt.target.value.split(","));
    }, 500);
  }

  return (
    <div>
      <input type="text" onChange={updateNames}></input>
      <div>
        {
          userData.map((user, index) => (
            <>
              <img src={user.avatar_url}></img>
              <div>
                {user.name}
              </div>
            </>
          ))
        }
      </div>
    </div>
  );
}

export default App;
