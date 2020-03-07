<template>
  <div class="home">
    <!-- <BlogPost /> -->

    <!-- ====header component ===== -->
    <app-header />

    <!-- ===intro section === -->
    <app-intro-section />

    <!-- ======about======= -->
    <app-about />

    <!-- ====== education ======== -->
    <app-education />

    <!-- ========service ================ -->
    <app-service />

    <!-- =========portfolio============== -->
    <app-portfolio />

    <!-- ========contact================== -->
    <app-contact />
  </div>
</template>

<script>
// @ is an alias to /src
// import BlogPost from "@/components/BlogPost/BlogPost.vue";

import appHeader from "@/components/reuseable_component/Header.vue";
import appIntroSection from "@/components/reuseable_component/IntroSection.vue";
import appAbout from "@/components/reuseable_component/About.vue";
import appEducation from "@/components/reuseable_component/Education.vue";
import appService from "@/components/reuseable_component/Service.vue";
import appPortfolio from "@/components/reuseable_component/Portfolio.vue";
import appContact from "@/components/reuseable_component/Contact.vue";

export default {
  name: "home",
  components: {
    // BlogPost
    appHeader,
    appIntroSection,
    appAbout,
    appEducation,
    appService,
    appPortfolio,
    appContact
  }
};
</script>
