const express = require('express');
const db = require('../models');

const Login = (req, res) => {
  res.render('Login.ejs');
};

const Home = async (req, res) => {
  try {
    let data = await db.User.findAll();
    // console.log('------------')
    // console.log(data)
    // console.log('------------')
    res.render('Home.ejs', {
      data: JSON.stringify(data)
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

const Enter = (req, res) => {
  res.render('Enter.ejs');
};

const List = (req, res) => {
  res.render('List.ejs');
};

module.exports = {
  Login,
  Home,
  Enter,
  List
};