// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const path = require('path');
// require('dotenv').config();


// const app = express();
// app.use(cors());
// app.use(express.json());
// // serve uploaded images
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// // routes
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/projects', require('./routes/projects'));
// // app.use('/api/blogs', require('./routes/blogs'));


// const PORT = process.env.PORT || 5000;


// // mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// // .then(() => app.listen(PORT, () => console.log('Server started on', PORT)))
// // .catch(err => console.error(err));

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log('MongoDB connected'))
// .catch(err => console.error('MongoDB connection error:', err));

// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// === TEST ROUTE TO CHECK SERVER ===
app.get('/', (req, res) => res.send('Server is running!'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
// app.use('/api/blogs', require('./routes/blogs'));

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and then start the server
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
})
.catch(err => console.error('❌ MongoDB connection error:', err));
