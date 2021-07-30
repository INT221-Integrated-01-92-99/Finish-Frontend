<template>
  <div class="detailProduct bg-cream-light bg-fixed">
    <div class="grid place-items-center h-screen">
      <section
        class="flex 2xl:flex-row lg:flex-row flex-col gap-11 py-10 px-5 mt-16 w-11/12 md:max-w-max"
      >
        <router-link to="/product/views">
          <button
            class="bg-cream-normal hover:bg-cream-light-brown 2xl:w-20 2xl:h-9 w-10 h-7 flex justify-center"
          >
            <img class="h-full" src="../assets/icon/left-arrow.svg" />
          </button>
        </router-link>
        <div class="flex flex-col 2xl:justify-between mx-auto w-1/2">
          <img class="" :src="image.url" />
        </div>
        <div class="font-serif space-y-2 w-3/4 mx-auto">
          <h3 class="text-cream-dark 2xl:text-2xl text-lg font-medium">
            {{product.brand.brandName}}
          </h3>
          <h3 class="text-cream-dark 2xl:text-2xl text-lg font-medium">
            {{ product.proName }}
          </h3>
          <h3
            class="text-black 2xl:text-2xl text-lg 2xl:pb-4 pb-2 font-semibold"
          >
            {{ product.proPrice }} THB
          </h3>
          <hr class="border-black border-solid border-1 opacity-20" />
          <p class="text-cream-dark 2xl:text-base text-sm">
            MFD : {{ product.proMfd }}
          </p>
          <p class="text-cream-dark 2xl:text-base text-sm">
            {{ product.proDescript }}
          </p>
          <div
            class="flex 2xl:justify-start lg:justify-start justify-center lg:pb-5 pb-3 lg:pt-5 pt-3 space-x-5"
          >
            <router-link :to="'/product/' + product.idPro">
              <base-button
                class="focus:outline-none font-serif py-1 px-7 rounded-sm hover:bg-green-600 hover:text-white"
                bgcolor="bg-green-500"
                txtcolor="text-white"
                txtbutt="Edit"
              ></base-button>
            </router-link>

            <base-button
              @click.prevent="sendToDelete = true, sendId = product.idPro"
              class="focus:outline-none font-serif px-6 rounded-sm border border-red-700 hover:bg-red-700 hover:text-white"
              bgcolor=""
              txtcolor="text-red-700"
              txtbutt="Delete"
            ></base-button>
            <base-delete :send-to-delete ="sendToDelete" :send-id ="sendId"></base-delete>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: [],
  emits: [],

  data() {
    return {
      product:{brand:{brandName:""}},
      urlProduct: "http://localhost:3000/product",
      sendToDelete: false,
      sendId: 0,
      urlImage: "http://localhost:3000/image",
      image:{url:''}
    };
  },
  methods: {
    async fetch(url) {
      const res = await fetch(url);
      const data = await res.json(url);
      return data;
    },
  },
  async created() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    this.product = await this.fetch(this.urlProduct + `/${id}`);
    this.image = await fetch(this.urlImage + '/' + this.product.proPathImg);
  },
};
</script>
