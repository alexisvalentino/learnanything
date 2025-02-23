const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Import Models
const User = require('./models/User');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  seedAdmin(); // Call the seedAdmin function after connecting to the database
})
.catch(err => console.log(err));

// Seed Admin User
const seedAdmin = async () => {
  const adminEmail = 'admin@example.com';
  const adminPassword = 'admin123'; // Use a strong password in production

  try {
    const adminUser = await User.findOne({ email: adminEmail });

    if (!adminUser) {
      const user = new User({
        username: 'admin',
        email: adminEmail,
        password: adminPassword,
        isAdmin: true, // Set isAdmin to true
      });
      await user.save();
      console.log('Admin user created successfully.');
    } else {
      console.log('Admin user already exists.');
    }
  } catch (err) {
    console.error('Error seeding admin user:', err.message);
  }
};

// Test Route
app.get('/', (req, res) => {
  res.send('Welcome to Learn Anything API');
});

// Start the Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});