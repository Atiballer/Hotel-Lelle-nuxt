<template>

    <div>
        <div class="jumbotron jumbotron-fluid pt-5 rooms">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>

        <Gallery></Gallery>

    </div>

</template>

<script>
import Gallery from "@/components/Gallery";

export default {
  components: { Gallery },
  layout: "other",

  data() {
    return {
      title: "Galéria",
      description: "Képek a szállodáról és a mindennapokról"
    };
  },

  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ]
    };
  }
};
</script>

<style>
</style>
