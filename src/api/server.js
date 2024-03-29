const express = require('express');
const { join } = require('path');
const app = require('./app');
const usersRouter = require('./routes/users');
const recipesRouter = require('./routes/recipes');
const loginRouter = require('./routes/login');
const error = require('./middlewares/error');

app.use(express.json());
app.use('/images', express.static(join(__dirname, '..', 'uploads')));
app.use('/users', usersRouter);
app.use('/recipes', recipesRouter);
app.use('/login', loginRouter);
app.use(error);

const PORT = 3000;

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
