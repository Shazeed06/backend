require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

const githubData = {
  "login": "Shazeed06",
  "id": 116747534,
  "node_id": "U_kgDOBvVtDg",
  "avatar_url": "https://avatars.githubusercontent.com/u/116747534?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Shazeed06",
  "html_url": "https://github.com/Shazeed06",
  "followers_url": "https://api.github.com/users/Shazeed06/followers",
  "following_url": "https://api.github.com/users/Shazeed06/following{/other_user}",
  "gists_url": "https://api.github.com/users/Shazeed06/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Shazeed06/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Shazeed06/subscriptions",
  "organizations_url": "https://api.github.com/users/Shazeed06/orgs",
  "repos_url": "https://api.github.com/users/Shazeed06/repos",
  "events_url": "https://api.github.com/users/Shazeed06/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Shazeed06/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Md Shazeed",
  "company": null,
  "blog": "",
  "location": "delhi",
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 10,
  "public_gists": 0,
  "followers": 1,
  "following": 4,
  "created_at": "2022-10-26T16:17:47Z",
  "updated_at": "2025-11-05T18:56:51Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res)=>{
    res.send('hiteshdotcom')
})

app.get('/login',(req,res)=>{
    res.send("<h1>please login at chai aur code</h1>")
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>hello Md Shazeed</h2>")
})


app.get('/github',(req,res)=>{
  res.json(githubData)
})

/*app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
*/

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})