<template>
  <header class="fixed top-0 min-h-20 py-0 px-5 flex justify-around items-center">
    <div id="logo">
      <img id="header-img"
        src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
        alt="original trombones logo" />
    </div>
    <nav id="nav-bar">
      <ul>
        <li><a class="nav-link" href="#features">产品特点</a></li>
        <li><a class="nav-link" href="#how-it-works">如何使用</a></li>
        <li><a class="nav-link" href="#relation">如何联系</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
li {
  list-style: none;
}

a {
  color: #000;
  text-decoration: none;
}

#header {
  position: fixed;
  top: 0;
  min-height: 75px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #eee;
}

#logo {
  width: 60vw;
}

#logo>img {
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: 20px;
}

nav {
  font-weight: 400;
  margin: 0px;
  padding: 0px;
}

nav>ul {
  display: block;
  width: 35vw;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>

