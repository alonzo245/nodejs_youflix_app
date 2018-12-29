
//GET ************************************************************/
fetch('http://localhost:8000/feed/posts')
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(e => console.log("Booo"));

//POST ************************************************************/
let url = 'http://localhost:8000/feed/post';
let method = 'POST';
let postData = {
  title: 'aaaa'
};

fetch(url, {

  method: method,
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: postData.title
  })
})
  .then(r => r.json())
  .then(data => console.log(data))
  .catch(e => console.log("Booo"));
//******************************************************************/