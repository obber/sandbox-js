import express from 'express';
import rp from 'request-promise';

(async function() {
  try {
    let users = await rp('http://jsonplaceholder.typicode.com/users');
    console.log('users = ', users);
  } catch (e) {
    console.error('error = ', e);
  }
})();