<template>
  <nav
    :class="{ 'bg-opacity-0 shadow-none': routes == '/' }"
    class="navbar fixed w-full p-3 pr-20 md:pr-16 top-0 text-white bg-cream-dark shadow-md"
  >
    <ul class="2xl:space-x-10 space-x-8 mt-1">
      <li style="float:left" class="pb-1 2xl:ml-20 lg:ml-16 ml-14">
        <router-link @click="changePath('/')" to="/"
          ><img class="w-1/12 h-1/12" src="./assets/logo.svg"
        /></router-link>
      </li>
      <li>
        <router-link
          @click="changePath('/product/views')"
          to="/product/views"
          :class="{ 'text-cream-light-brown': routes == '/product/views' }"
          class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
          >Product</router-link
        >
      </li>
      <li>
        <router-link
          @click="changePath('/team')"
          to="/team"
          :class="{ 'text-cream-light-brown': routes == '/team' }"
          class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
          >Team</router-link
        >
      </li>
      <li>
        <router-link
          @click="changePath('/')"
          to="/"
          :class="{ 'text-cream-light-brown': routes == '/' }"
          class="text-base font-serif font-medium transition ease-in duration-300 transform hover:-translate-y-1 active:translate-y-0 p-2 focus:text-cream-light-brown hover:text-cream-light-brown"
          >Home</router-link
        >
      </li>
    </ul>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      routes: "/",
    };
  },
  methods: {
    changePath(path) {
      this.routes = path;
    },
  },
};
</script>

<style>
nav {
  z-index: 10;
}

nav.scrolled {
  @apply shadow-2xl;
  border-bottom: 0px;
}

li {
  float: right;
  display: block;
  color: white;
  text-align: center;
  text-decoration: none;
}
</style>
