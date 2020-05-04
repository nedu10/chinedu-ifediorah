<template>
  <!--================ Start Portfolio Area =================-->
  <section class="portfolio_area" id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="main_title">
            <p class="top_text">My Portfolio <span></span></p>
            <h2>
              Check My Recent <br />
              Work
            </h2>
          </div>
        </div>
      </div>

      <div class="filters portfolio-filter">
        <ul>
          <li
            :class="active_key == '' ? 'active' : ''"
            @click="select_portfolio()"
          >
            All
          </li>
          <li
            :class="active_key == 'html' ? 'active' : ''"
            @click="select_portfolio('html')"
          >
            HTML/CSS
          </li>
          <li
            :class="active_key == 'node' ? 'active' : ''"
            @click="select_portfolio('node')"
          >
            Node
          </li>
          <li
            :class="active_key == 'react' ? 'active' : ''"
            @click="select_portfolio('react')"
          >
            React
          </li>
          <li
            :class="active_key == 'vue' ? 'active' : ''"
            @click="select_portfolio('vue')"
          >
            Vue
          </li>
          <li
            :class="active_key == 'brandoc' ? 'active' : ''"
            @click="select_portfolio('brandoc')"
          >
            Freelance Brandoc designs
          </li>
        </ul>
      </div>

      <div class="filters-content">
        <div class="row portfolio-grid">
          <div
            class="col-12 col-lg-4 col-md-6 all"
            v-for="(each, index) in random_porfolio_data"
            :key="index"
          >
            <div class="single_portfolio">
              <img class="img-fluid w-100" :src="each.src" alt="" />
              <div class="overlay"></div>
              <div class="short_info">
                <h4>
                  <a href="portfolio-details.html">{{ each.name }}</a>
                </h4>
                <p>{{ each.tech.toUpperCase() }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--================ End Portfolio Area =================-->
</template>

<script>
export default {
  name: "portfolio",
  data() {
    return {
      active_key: "",
      porfolio_data: [
        {
          title: "html_vue",
          src: "/portfolio/html_vue.png",
          name: "MyRealPast Dashboard",
          tech: "Html, Css and VueJs",
        },
        {
          title: "html",
          src: "/portfolio/html.png",
          name: "Kasuwa",
          tech: "Html, Css",
        },
        {
          title: "html",
          src: "/portfolio/html2.png",
          name: "Kasuwa Product",
          tech: "Html, Css and VueJs",
        },
        {
          title: "node_vue",
          src: "/portfolio/node_vue.png",
          name: "Project-pos Dashboard",
          tech: "NodeJs and VueJs",
        },
        {
          title: "node_vue",
          src: "/portfolio/node_vue2.png",
          name: "Project-pos Product",
          tech: "NodeJs and VueJs",
        },
        {
          title: "node",
          src: "/portfolio/node.png",
          name: "Project-pos Product",
          tech: "NodeJs and VueJs",
        },
        // {
        //   title: "vue",
        //   src: "/portfolio/vue.png",
        //   name: "Alejo",
        //   tech: "Vuejs and AdonisJs"
        // },
        // {
        //   title: "vue",
        //   src: "/portfolio/vue2.png",
        //   name: "NBA Membership App",
        //   tech: "Vuejs and AdonisJs"
        // },
        {
          title: "brandoc",
          src: "/portfolio/brandoc.jpg",
          name: "Designs",
        },
        {
          title: "brandoc",
          src: "/portfolio/brandoc1.jpg",
          name: "Designs",
        },
        {
          title: "brandoc",
          src: "/portfolio/brandoc2.jpg",
          name: "Designs",
        },
        {
          title: "brandoc",
          src: "/portfolio/brandoc3.jpg",
          name: "Designs",
        },
        {
          title: "brandoc",
          src: "/portfolio/brandoc4.jpg",
          name: "Designs",
        },
      ],
      new_portfolio_data: [],
    };
  },
  computed: {
    random_porfolio_data() {
      if (this.new_portfolio_data) {
        return this.new_portfolio_data.sort(() => {
          Math.random() - 0.5;
        });
      } else {
        return null;
      }
    },
  },
  methods: {
    select_portfolio(params) {
      this.new_portfolio_data = [];
      if (params) {
        this.active_key = params;
        this.porfolio_data.forEach((each) => {
          let get_arr = each.title.split("_");
          if (get_arr.indexOf(params) != -1) {
            this.new_portfolio_data.push(each);
            return true;
          }
        });
      } else {
        console.log("meee");
        this.porfolio_data.forEach((each) => {
          console.log("ee >> ", each.title != "brandoc");
          // if (each.title != "brandoc") {
          this.new_portfolio_data.push(each);
          // }
          return true;
        });
      }
    },
  },
  mounted() {
    this.select_portfolio();
  },
};
</script>
