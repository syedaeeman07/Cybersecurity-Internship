const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
res.send('<h1>Login</h1><form method="POST" action="/login"><input name="username" placeholder="Username"/><br><br><input name="password" type="password" placeholder="Password"/><br><br><button>Login</button></form><br><a href="/signup">Sign Up</a>');
});

app.post('/login', (req, res) => {
const u = req.body.username;
res.send('<h2>Logged in as: ' + u + '</h2><a href="/">Back</a>');
});

app.get('/signup', (req, res) => {
res.send('<h1>Sign Up</h1><form method="POST" action="/signup"><input name="name" placeholder="Name"/><br><br><input name="email" placeholder="Email"/><br><br><input name="password" type="password" placeholder="Password"/><br><br><button>Register</button></form>');
});

app.post('/signup', (req, res) => {
const n = req.body.name;
res.send('<h2>Welcome ' + n + '!</h2><a href="/">Login</a>');
});

app.listen(3000, function(){ console.log('Running on http://localhost:3000'); });