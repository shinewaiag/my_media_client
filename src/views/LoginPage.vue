<template>
    <div class="py-3 d-flex justify-content-center">
    <p class="mr-4 btn btn-danger" @click="home()">Home</p>
    <p class="btn btn-dark bg-dark" @click="login()">Login</p>
  </div>
  
  <div class="container p-5 my-5 shadow col-5">
    <div class="alert alert-danger" role="alert" v-if="userStatus">
      The credentials do not match.
    </div>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" v-model="userData.email" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" v-model="userData.password" v-on:keyup.enter="accountLogin()">
    </div>
    <button type="button" class="btn btn-primary" @click="accountLogin()">login</button>
  </div>
</template>

<script src="../js/loginPage.js"></script>

