<template>
  <div class="navbar">
    <a href="/">
      <img class="logo" src="../assets/logo.png" alt="navbar" />
    </a>
  </div>
</template>

<style scoped>
.navbar {
  height: 100px;
  width: 100%;
  position: sticky;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  top: 0;
  background-color: #f3f9fc;
  z-index: 2;
  margin-bottom: 10px;
}

.logo {
  max-width: 195px;
  margin: 5px;
}

@media screen and (max-width: 500px) {
  .logo {
    width: 145px;
  }

  .navbar {
    height: 76px;
  }
}
</style>
