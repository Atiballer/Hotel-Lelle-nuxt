<template>
    <div>

        <div class="jumbotron jumbotron-fluid pt-5 rooms">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>

        <section class="mb-2">
            <div class="container pt-5">
                <div class="row pt-5">
                    <div class="col-sm-12 col-md-6">
                        <h2 class="text-center">Standard szoba</h2>
                        <p>
                            Standard típusú szobáink döntően 3 ágyasak. 2+1 fő elhelyezésére alkalmasak, erkéllyel illetve saját
                            fürdőszobával is rendelkeznek.
                        </p>
                        <font-awesome-icon icon="bed"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="bath"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="binoculars"
                                           size="2x"
                                           class="pt-2" />
                    </div>
                    <div class="col-xs-12 col-sm-6 roomspic">
                        <img class="img-fluid img-thumbnail cover"
                             src="../assets/IMG_6032.jpg"
                             alt="Hotel Lelle standard szoba" />
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-2">
            <div class="container pt-5">
                <div class="row pt-5">
                    <div class="col-sm-12 col-md-6">
                        <h2 class="text-center">Standard+ szoba</h2>
                        <p>
                            Standard+ típusú szobáink döntően 3 ágyasak. 2+1 fő elhelyezésére alkalmasak, erkéllyel illetve saját
                            fürdőszobával is rendelkeznek. Ezen típusú szobáinkban található még TV valamint
                            hűtő is.
                        </p>
                        <font-awesome-icon icon="bed"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="bath"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="binoculars"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="tv"
                                           size="2x"
                                           class="pt-2" />

                    </div>
                    <div class="col-xs-12 col-sm-6 roomspic">
                        <img class="img-fluid img-thumbnail cover"
                             src="../assets/IMG_6034.jpg"
                             alt="A szálloda standard+ típusú szobája" />
                    </div>
                </div>
            </div>
        </section>

        <section class="mb-2">
            <div class="container pt-5">
                <div class="row pt-5">
                    <div class="col-sm-12 col-md-6">
                        <h2 class="text-center">Családi szoba</h2>
                        <p>
                            Családi szobáink 2+2 fő elhelyezésére alkalmasak. Erkéllyel, saját fürdőszobával. A szobákban Tv és hűtő
                            található. Egy légtérben található a nappali és a hálószoba, melyek függönnyel
                            vannak elválasztva. Gyermekkel érkező családoknak ideális. Hatalmas, Balatonra
                            néző erkéllyel rendelkezik.
                        </p>
                        <font-awesome-icon icon="bed"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="bath"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="binoculars"
                                           size="2x"
                                           class="pt-2" />
                        <font-awesome-icon icon="tv"
                                           size="2x"
                                           class="pt-2" />
                    </div>
                    <!-- <div class="col-xs-12 col-sm-6 roomspic">
                        <img class="img-fluid img-thumbnail cover"
                             src="../assets/IMG_6238.jpg"
                             alt="Hotel Lelle családi szoba" />
                    </div> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
  layout: "other",
  data() {
    return {
      title: "Szobáink",
      description: "Tekintse meg szállodánk elérhető szoba típusait"
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
