<template>
    <div>
        <Navigation></Navigation>
        <Jumbotron></Jumbotron>
        <nuxt/>
        <Footer></Footer>
    </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Jumbotron from "@/components/Jumbotron";

export default {
  components: { Navigation, Footer, Jumbotron }
};
</script>

<style>
</style>

