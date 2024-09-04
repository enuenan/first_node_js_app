const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashedPassword });

    if (req.isMobile) {
      // Respond for mobile
      res.status(201).json({ success: true, data: user });
    } else {
      // Respond for web
      res.redirect('/users');
    }
  } catch (error) {
    if (req.isMobile) {
      res.status(400).json({ success: false, error: error.message });
    } else {
      res.render('users/new', { error: error.message });
    }
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();

    if (req.isMobile) {
      // Respond for mobile
      res.json({ success: true, data: users });
    } else {
      // Render view for web
      res.render('users/index', { users });
    }
  } catch (error) {
    if (req.isMobile) {
      res.status(400).json({ success: false, error: error.message });
    } else {
      res.render('users/index', { error: error.message });
    }
  }
};

// Continue with similar logic for getUser, updateUser, and deleteUser
