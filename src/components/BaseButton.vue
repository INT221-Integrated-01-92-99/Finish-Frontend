<template>
  <button @click="buttonClick" class="btn" :class="[bgcolor, txtcolor]">
    {{ txtbutt }}
  </button>
</template>
<script>
export default {
  props: ["bgcolor", "txtcolor", "txtbutt"],
};
</script>
