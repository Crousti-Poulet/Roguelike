"use strict";
import Vue from 'vue';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Footervue from './components/Footervue';
import CreateAccount from './components/CreateAccount';

var home = new Vue({
  
  el: "#app",
  components: {Home}
});

let header = new Vue({
  el: '#header',
  components: {Navbar}
});

let footervue = new Vue({
  el: "#footertest",
  components: {Footervue}
});

// var appCreateAccount = new Vue({
//   el: "#app-createAccount",
//   components: {appCreateAccount}
// });