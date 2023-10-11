const API_URL = 'https://jsonplaceholder.typicode.com'

function getUserByIdAndUsername(id, username) {
  fetch(`${API_URL}/users/${id}`)
    .then(res => {
      if (res.status === 404)
        return Promise.reject(new Error(`Could not find a user with id ${id}`));
      else if (!res.ok)
        return Promise.reject(new Error(`Something went wrong when getting user with id ${id}`));
      else
        return res.json();
    })
    .then(res => {
      if (res.username !== username)
        return Promise.reject(new Error(`The user with id ${id} does not have username '${username}'`));
      else {
        const bodyDOM = document.body;
        // Method 1: classList returns a DOMTokenList collection (https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
        bodyDOM.classList.add("done");
        // Method 2: Sets the value of an attribute on the specified element (https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
        // Remark: If the attribute already exists, the value is updated (overwrite)
        // bodyDOM.setAttribute("class", "done");
        const resultDOM = document.getElementById('result');
        resultDOM.innerText = JSON.stringify(res, 0, 2);
      }
    })
    .catch(err => {
      bodyDOM.classList.add("done");
      alert(err);
    })
}

getUserByIdAndUsername(1, 'Bret');
