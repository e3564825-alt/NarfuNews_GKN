require('dotenv').config();
const tableService = require('../services/TableService');
const express = require('express');
const router = express.Router();
router.get('/auth', (req. res) => {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json({ message: 'Не заполнены обязательные поля'});
  }
  tableService._get(process.env.dstl433LKefDYwPZWV)
    .then(req=> req.data)
    .then(records=> res.json(records))
});

module.exports = router;