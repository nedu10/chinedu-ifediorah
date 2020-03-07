<template>
  <div>
    <app-admin-header />
    <router-view></router-view>
  </div>
</template>

<script>
import appAdminHeader from "@/components/base/Header.vue";
export default {
  name: "admin_layout",
  components: {
    appAdminHeader
  }
};
</script>

<style></style>
