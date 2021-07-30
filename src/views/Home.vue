<template>
  <div class="home">
    <div class="w-full -z-10 absolute lg:inset-0 inset-0">
      <video
        loop
        autoplay
        poster="img/videoframe.jpg"
        class=" w-full bg-no-repeat bg-center fixed"
      >
        <source src="../assets/home-bg.mp4" type="video/mp4" />
      </video>
    </div>
    <div
      class="2xl:mt-72 lg:mt-56 mt-40 flex-col justify-center text-center space-y-3"
    >
      <h1
        class="font-serif font-medium 2xl:text-7xl text-5xl text-white tracking-widest"
      >
        PUSH&PULL
      </h1>
      <div class="2xl:pt-4 pt-2 flex-col justify-center">
        <router-link to="/product"
          ><base-button
            bgcolor="bg-yellow-400"
            txtcolor="text-black"
            txtbutt="SHOP NOW!"
            class="hover:bg-black hover:text-yellow-400 font-serif font-semibold transition ease-in duration-200 transform hover:-translate-y-1 active:translate-y-0 p-2 rounded-sm 2xl:text-xl lg:text-sm text-xs 2xl:w-40 2xl:h-12 lg:w-28 lg:h-10 w-24 h-9"
          >
          </base-button
        ></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
