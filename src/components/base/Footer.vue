<template>
  <!--================Footer Area =================-->
  <footer class="footer_area py-5" style="border-top: 5px solid #ba2aaf;">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="footer_top flex-column">
            <div class="footer_logo">
              <a href="#">
                <img src="/assets/logo-new.png" width="75" alt="" />
              </a>
            </div>
            <div class="footer_social mt-4">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-skype"></i></a>
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div class="row footer_bottom justify-content-center">
        <p class="col-lg-8 col-sm-12 footer-text">
          <span>
            Copyright &copy;
            {{ get_current_data }}
            All Rights Reserved | Designed
            <i class="ion-heart" aria-hidden="true"></i> by
            <span style="color: #9930ba;">Chinedu Ifediorah</span>
          </span>
        </p>
      </div>
    </div>
  </footer>
  <!--================End Footer Area =================-->
</template>

<script>
export default {
  name: "footer",
  computed: {
    get_current_data() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style></style>
