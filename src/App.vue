<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-spinner v-if="show_spinner" />
    <app-layout v-if="!show_spinner"></app-layout>
    <app-footer v-if="!show_spinner" />
  </div>
</template>

<script>
import appLayout from "@/components/Layouts/Layout.vue";
import appFooter from "@/components/base/Footer.vue";
import appSpinner from "@/components/UI/Spinner.vue";
export default {
  data() {
    return {
      show_spinner: true
    };
  },
  components: {
    appLayout,
    appFooter,
    appSpinner
  },
  mounted() {
    const vm = this;
    setTimeout(() => {
      vm.show_spinner = false;
    }, 2000);
  }
};
</script>

<style></style>
