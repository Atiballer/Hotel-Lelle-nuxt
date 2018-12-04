<template>

  <nav :class="{'solid': solid}"
       class="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
    <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style="border: 3px solid;
          border-color: white;">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse"
         id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/">Kezdőlap</nuxt-link>
        </li>
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/szobak">Szobák</nuxt-link>
        </li>
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/arak">Árak</nuxt-link>
        </li>
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/ajanlataink">Ajánlataink</nuxt-link>
        </li>

        <!--
            <li class="nav-item active px-3">
              <a class="nav-link" href="programok.html">Programok</a>
            </li>
          -->
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/galeria">Galéria</nuxt-link>
        </li>
        <li class="nav-item active px-3">
          <nuxt-link :class="{'solid2': solid2}"
                     class="nav-link"
                     to="/kapcsolat">Kapcsolat</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  data: function() {
    return {
      solid: false,
      solid2: false
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 300) {
        (this.solid = true), (this.solid2 = true);
      } else {
        (this.solid = false), (this.solid2 = false);
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeUpdate() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  }
};
</script>

<style>
</style>

