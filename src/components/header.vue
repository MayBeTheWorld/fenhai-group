<template>
  <header class="fixed top-0 w-full min-h-16 py-0 px-5 flex justify-between items-center header">
    <div class="w-16">
      <img class="min-w-30 flex justify-center items-center text-center ml-40"
        src="../assets/logo.png"
        alt="logo" />
    </div>
    <nav class="m-0 p-0 w-1/2 font-normal" >
      <ul class="flex pl-10 flex-row justify-around">
        <li class="list-none mx-4"><router-link to="/" class="text-white no-underline hover:text-teal-500" href="#features">首页</router-link></li>
        <li class="list-none mx-4"><router-link to="/aboutUs" class="text-white no-underline hover:text-teal-500" href="#features">关于我们</router-link></li>
        <li class="list-none mx-4"><router-link to="/produce" class="text-white no-underline hover:text-teal-500" href="#features">产品中心</router-link></li>
        <li class="list-none mx-4"><router-link to="/" class="text-white no-underline hover:text-teal-500" href="#features">售后服务</router-link></li>
        <li class="list-none mx-4"><router-link to="/" class="text-white no-underline hover:text-teal-500" href="#features">新闻动态</router-link></li>
        <li class="list-none mx-4"><router-link to="/" class="text-white no-underline hover:text-teal-500" href="#features">联系我们</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  background-color: #242424;
}
</style>

