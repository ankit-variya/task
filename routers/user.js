const { createUser, userList, getUserById, updateUser, deleteUser } = require('../controllers/user');
const express = require('express');
const router = express.Router();

router.post('/', createUser);
router.get('/', userList);
router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
