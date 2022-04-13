const app = require('./app');

const port = process.env.PORT || 8080;

const connectDB = require('./config/database');

connectDB();

app.listen(port, () => {
  console.log(`Server running 🚀 at http://localhost:${port}/`);
});

module.exports = app;
