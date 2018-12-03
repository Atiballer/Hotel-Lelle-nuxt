const pkg = require("./package");

const webpack = require("webpack");

const scroll = function(to, from, savedPosition) {
  if (to.hash) {
    return new Promise(resolve => {
      setTimeout(() => {
        let position = {};
        if (to.hash && document.querySelector(to.hash)) {
          // scroll to anchor by returning the selector
          position = { selector: to.hash };
        } else {
          position = { x: 0, y: 0 };
        }
        resolve(position);
      }, 500);
    });
  } else {
    return { x: 0, y: 0 };
  }
};

const gtmid = "GTM-WRVRTFP";

module.exports = {
  mode: "universal",
  router: {
    scrollBehavior: scroll
  },

  /*
   ** Headers of the page
   */
  head: {
    title: "Hotel Lelle - Balatonlelle",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description },
      {
        name: "google-site-verification",
        content: "GuCfPsOmvJM4nVFwHS5oMiVkMmDCauvGbQZi5LKJoZA"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Courgette"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Lato:300,400,400i,700|Raleway:300,400,500,600,700|Crete+Round:400i"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },

  /*
   ** Global CSS
   */
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/scss/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css"
  ],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~plugins/jquery.js" },
    { src: "~plugins/popper.js" },
    { src: "~plugins/bootstrap.js" },
    { src: "~/plugins/fontawesome.js" },
    { src: "~/plugins/vue-lazyload.js", ssr: false },
    { src: "~/plugins/vue-image-lightbox.js", ssr: false },
    { src: "~/plugins/vue2-google-maps.js" },
    { src: "~plugins/ga.js", ssr: false },
    { src: "~plugins/vue-js-modal" }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    ["@nuxtjs/google-tag-manager", { id: gtmid }],
    "@nuxtjs/axios",
    "@nuxtjs/sitemap"
  ],

  sitemap: {
    path: "/sitemap.xml",
    hostname: "https://www.hotel-lelle.hu",
    generate: true
  },

  /*
   ** Build configuration
   */
  build: {
    transpile: [/^vue2-google-maps($|\/)/],
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        jquery: "jquery",
        "window.jQuery": "jquery",
        punchgs: "gsap/all"
      })
    ],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias["jquery"] = "@/static/bootstrap/jquery-3.3.1.min.js";
      config.resolve.alias["popper.js"] = "@/static/bootstrap/popper.min.js";
      config.resolve.alias["bootstrap"] = "@/static/bootstrap/bootstrap.min.js";

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    },

    loaders: [
      {
        test: /\.(scss|sass|css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: "url-loader",
        query: {
          limit: 1000,
          name: "img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        query: {
          limit: 1000,
          name: "fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  }
};
