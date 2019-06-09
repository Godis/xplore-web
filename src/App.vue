<template>
  <div id="app">
    <el-container>
      <el-menu class="el-menu-demo" mode="horizontal" :router="true">
        <el-menu-item index="/">Home</el-menu-item>
        <el-menu-item index="/list">List</el-menu-item>
        <el-menu-item index="/about">About</el-menu-item>
      </el-menu>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
