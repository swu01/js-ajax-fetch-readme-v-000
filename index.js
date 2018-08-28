const app = "I don't do much.";

// Token would be assigned to const token
const token = token here
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: `token ${token}`
    }
  }).then(res => res.json()).then(json => console.log(json));
