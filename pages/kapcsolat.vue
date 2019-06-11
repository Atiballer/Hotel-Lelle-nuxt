<template>

  <div>
    <div class="jumbotron jumbotron-fluid pt-5 rooms">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
    </div>

    <Map></Map>

    <div class="container contact pt-3">
      <h4>Hotel Lelle</h4>
      <p>
        Áraink kialakításánál az volt a legfontosabb szempont, hogy mindenki számára elérhető
        legyen a nyaralás,
        akiknek ez egyenlő a Balatonnal, a napfénnyel, fürdőzéssel!
      </p>
      <p>Címünk:
        <strong>8638, Balatonlelle, Honvéd utca 24</strong>
      </p>
    </div>

    <div class="container py-3">
      <div class="row contactrow">
        <div class="col-xs-12 col-md-4">
          <font-awesome-icon :icon="['fab', 'facebook']"
                             size="4x"
                             class="pb-3" />
          <p>Nézzen szét Facebook oldalunkon is.</p>
          <a href="https://www.facebook.com/hotellelle2018/">
            <p>Hotel Lelle a Facebook-on</p>
          </a>
        </div>
        <div class="col-xs-12 col-md-4">
          <font-awesome-icon icon="phone"
                             size="4x"
                             class="pb-3" />
          <p>Bármilyen kérdése van, szívesen válaszolunk telefonon is.</p>
          <p style="font-weight:bold">Telefonszám: 06-20/519-5610</p>
        </div>
        <div class="col-xs-12 col-md-4">
          <font-awesome-icon :icon="['far', 'envelope']"
                             size="4x"
                             class="pb-3" />
          <p>Foglalási szándékát kérem jelezze e-mailben!</p>
          <a href="mailto:foglalas@hotel-lelle.hu">
            <p style="font-weight:bold">
              E-mail címünk: foglalas@hotel-lelle.hu
            </p>
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Map from "@/components/Map";

export default {
  components: { Map },
  layout: "other",
  data() {
    return {
      title: "Kapcsolat",
      description: "Keressen elérhetőségeinken"
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
