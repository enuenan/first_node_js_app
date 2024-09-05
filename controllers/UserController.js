// import { create, findAll } from '../models/user.js';
import hash from 'bcryptjs';

export async function createUser(req, res) {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await hash(password, 10);
    const user = await create({ name, email, password: hashedPassword });

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
}

export async function getAllUsers(req, res) {
  try {
    const users = await findAll();

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
}

export async function getUser(req, res) {
  try {
    const users = await findAll();

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
}

export async function updateUser(req, res) {
  try {
    const users = await findAll();

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
}

export async function deleteUser(req, res) {
  try {
    const users = await findAll();

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
}

// Continue with similar logic for getUser, updateUser, and deleteUser
