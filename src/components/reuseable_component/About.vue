<template>
  <!--================ Start About Us Area =================-->
  <section class="about_area section_gap pt-4 mt-5">
    <div class="container">
      <div class="row justify-content-start align-items-center">
        <div class="col-lg-4">
          <div class="about_img">
            <img class="" src="@/assets/images/about-me.png" alt="" />
          </div>
        </div>

        <div class="col-lg-8 pl-2">
          <div class="main_title text-left">
            <p class="top_text">About me <span></span></p>
            <h2>
              Full stack Software <br />
              Engineer
            </h2>
            <p>
              I am a Full stack Software Engineer with proficiency in Javascript
              and python. I love using these languages, its libraries and
              frameworks to build excellent web applications and to solve
              complex problems by creating scalable algorithms.
            </p>
            <div class="row">
              <div class="col-6 col-md-3 py-4 col-lg-3">
                <div class=" margin-b-30">
                  <radial-progress-bar
                    :diameter="145"
                    :strokeWidth="3"
                    startColor="#4565fc"
                    stopColor="#9b1a77"
                    innerStrokeColor="#eee"
                    :completed-steps="completedSteps(0.9)"
                    :total-steps="totalSteps"
                    ><h6 class="progress-title">
                      <p
                        class="text-center mb-0"
                        v-text="
                          Math.ceil((completedSteps(0.92) / totalSteps) * 100) +
                            '%'
                        "
                      >
                        <!-- {{ Math.ceil((completedSteps(0.9) / totalSteps) * 100) }}% -->
                      </p>
                      <br />HTML5 & CSS3
                    </h6>
                  </radial-progress-bar>
                  <!-- <div></div>
                    <h6 class="progress-title">HTML5 & CSS3</h6> -->
                </div>
                <!-- -->
              </div>
              <!-- col-6-->

              <div class="col-6 col-md-3 py-4 col-lg-3">
                <div class=" margin-b-30">
                  <radial-progress-bar
                    :diameter="145"
                    :strokeWidth="3"
                    startColor="#4565fc"
                    stopColor="#9b1a77"
                    innerStrokeColor="#eee"
                    :completed-steps="completedSteps(0.97)"
                    :total-steps="totalSteps"
                    ><h6 class="progress-title">
                      <p
                        class="text-center mb-0"
                        v-text="
                          Math.ceil((completedSteps(0.97) / totalSteps) * 100) +
                            '%'
                        "
                      ></p>
                      <br />JAVASCRIPT
                    </h6>
                  </radial-progress-bar>
                </div>
              </div>
              <!-- col-6-->

              <div class="col-6 col-md-3 py-4 col-lg-3">
                <div class=" margin-b-30">
                  <radial-progress-bar
                    :diameter="145"
                    :strokeWidth="3"
                    startColor="#4565fc"
                    stopColor="#9b1a77"
                    innerStrokeColor="#eee"
                    :completed-steps="completedSteps(0.9)"
                    :total-steps="totalSteps"
                    ><h6 class="progress-title">
                      <p
                        class="text-center mb-0"
                        v-text="
                          Math.ceil((completedSteps(0.9) / totalSteps) * 100) +
                            '%'
                        "
                      ></p>
                      <br />
                      <p class="mb-0 text-center" style="font-size: xx-small;">
                        Web Design
                      </p>
                      <br />
                      <p class="mb-0 text-center" style="font-size: xx-small;">
                        Web Development
                      </p>
                    </h6>
                  </radial-progress-bar>
                </div>
              </div>
              <!-- col-6-->

              <div class="col-6 col-md-3 py-4 col-lg-3">
                <div class=" margin-b-50">
                  <radial-progress-bar
                    :diameter="145"
                    :strokeWidth="3"
                    startColor="#4565fc"
                    stopColor="#9b1a77"
                    innerStrokeColor="#eee"
                    :completed-steps="completedSteps(0.85)"
                    :total-steps="totalSteps"
                    ><h6 class="progress-title">
                      <p
                        class="text-center mb-0"
                        v-text="
                          Math.ceil((completedSteps(0.85) / totalSteps) * 100) +
                            '%'
                        "
                      ></p>
                      <br />
                      <p class="mb-0 text-center" style="font-size: xx-small;">
                        SPA/PWA
                      </p>
                      <br />
                      <p class="mb-0 text-center" style="font-size: xx-small;">
                        (VueJs/ReactJs)
                      </p>
                    </h6>
                  </radial-progress-bar>
                </div>
              </div>
              <!-- col-6-->
            </div>
            <!-- row -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End About Us Area =================-->
</template>

<script>
import RadialProgressBar from "vue-radial-progress";
export default {
  name: "about-us",
  data() {
    return {
      totalSteps: 100,
      percent: 0
    };
  },
  computed: {
    completedSteps() {
      return param => {
        // console.log("params  <<  ", param);
        return Math.ceil(param * this.percent);
      };
    }
  },
  components: {
    RadialProgressBar
  },
  mounted() {
    let vm = this;
    let count_interval = setInterval(() => {
      // console.log("here  >> ");
      vm.percent++;
    }, 30);
    setTimeout(() => {
      clearInterval(count_interval);
      vm.percent = 100;
    }, 3000);
  }
};
</script>

<style></style>
