<template>
  <!-- ====================contact area ========================== -->
  <section style="background: #f8faff; padding-top: 20px;" class="pt-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main_title">
            <p class="top_text">My Contact <span></span></p>
            <h2>Get In Touch</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-8 mb-4 mb-lg-0">
          <form
            class="form-contact contact_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            novalidate="novalidate"
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    class="form-control w-100"
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    placeholder="Enter Message"
                    disabled
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control"
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    disabled
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="Enter email address"
                    disabled
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    placeholder="Enter Subject"
                    disabled
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-lg-3">
              <button
                type="submit"
                disabled
                class="primary_btn button-contactForm"
              >
                Still in progress
              </button>
            </div>
          </form>
        </div>

        <div class="col-lg-4">
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-home"></i></span>
            <div class="media-body">
              <h3>3 FHA Estate</h3>
              <p>Satelite Town Lagos</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-tablet"></i></span>
            <div class="media-body">
              <h3><a href="tel:454545654">09057628965, 08148522838</a></h3>
              <p>M0N - SUN, 8AM - 10PM</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon"><i class="ti-email"></i></span>
            <div class="media-body">
              <h3>
                <a href="mailto:cifediorah3@gmail.com">cifediorah3@gmail.com</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ===================end of contact ======================= -->
</template>

<script>
export default {
  name: "contact"
};
</script>

<style></style>
