const { login, Register, GetallUser, GetuserByID, UpdateUserbyID , Followuser, UnfollowUser, Getusertweets,GetUserRetweets } = require('../controller/user_c');
const Router= require('express').Router();
const auth = require('../middleware/protectiveRoutes');

Router.post('/register', Register);
Router.post('/login', login);
Router.get('/GetallUser', GetallUser);
Router.get('/GetuserByID/:id', GetuserByID);
Router.put('/UpdateUserbyID/:id', UpdateUserbyID);
Router.put('/Followuser/:id', Followuser);
Router.put('/UnfollowUser/:id', UnfollowUser);
Router.get('/Getusertweets/:id', auth, Getusertweets);
Router.get('/GetUserRetweets/:id',auth, GetUserRetweets);


module.exports = Router;
