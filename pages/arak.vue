<template>
    <div>

        <section>
            <v-dialog/>
        </section>

        <div class="jumbotron jumbotron-fluid pt-5 rooms">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
        </div>

        <div class="table-responsive py-3">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Szoba Típusa</th>

                        <!-- <th scope="col"></th> -->
                        <th scope="col"
                            colspan="4"
                            style="text-align:center">
                            Foglalt időszak
                        </th>
                    </tr>
                    <tr>
                        <th scope="col"></th>

                        <th scope="col"
                            colspan="2"
                            style="text-align:center">3 éj</th>

                        <th scope="col"
                            colspan="2"
                            style="text-align:center">5 éj</th>
                    </tr>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">2 fős szoba</th>
                        <th scope="col">3 fős szoba</th>
                        <th scope="col">2 fős szoba</th>
                        <th scope="col">3 fős szoba</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Standard</th>
                        <td>11 550 Ft /fő/éj</td>
                        <td>9 900 Ft /fő/éj</td>
                        <td>10 890 Ft /fő/éj</td>
                        <td>8 580 Ft /fő/éj</td>
                    </tr>
                    <tr>
                        <th scope="row">Standard+</th>
                        <td>12 210 Ft /fő/éj</td>
                        <td>10 340 Ft /fő/éj</td>
                        <td>11 440 Ft /fő/éj</td>
                        <td>9 460 Ft /fő/éj</td>
                    </tr>
                    <tr>
                        <th scope="row">Családi</th>
                        <td colspan="2"
                            style="text-align:center">44 000 Ft /szoba</td>
                        <td colspan="2"
                            style="text-align:center">38 500 Ft /szoba</td>
                    </tr>
                </tbody>
            </table>
            <p style="font-weight:bold">
                Az árak félpanziós menüválasztásos ellátást tartalmaznak.
            </p>
            <p>1 éjszakás foglalás: 20% felár</p>
            <p>2 éjszakás foglalás: 5% felár</p>
            <p>
                Az idegenforgalmi adó (IFA) ezen felül fizetendő készpénzben a helyszínen. Összege 2019-ben 18 év felett:
                400Ft/fő/éj volt.
            </p>
        </div>

        <Conditions></Conditions>
    </div>
</template>

<script>
import Conditions from "@/components/Conditions";

export default {
  components: { Conditions },
  layout: "other",
  data() {
    return {
      title: "Árak",
      description: "2019. június 14. – augusztus 23. között érvényes árak"
    };
  },
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: this.description }
      ]
    };
  },
  mounted() {
    this.$modal.show("dialog", {
      title: "Figyelem!",
      text: "Aktuális kedvezményeinkről az Ajánlataink menüpontban olvashatnak",
      buttons: [
        {
          title: "Ajánlataink", // Button title
          default: true, // Will be triggered by default if 'Enter' pressed.
          handler: r => {
            this.$router.push("ajanlataink");
          } // Button click handler
        },
        {
          title: "Bezárás"
        }
      ]
    });
  }
};
</script>

<style>
.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
  opacity: 1;
}
.v--modal-overlay .v--modal-background-click {
  min-height: 100%;
  width: 100%;
  padding-bottom: 10px;
}

.v--modal-top-right {
  display: block;
  position: absolute;
  right: 0;
  top: 0;
}

.v--modal-overlay .v--modal-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

.v--modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
  font-family: "Monserrat";
}

.vue-dialog .dialog-content {
  flex: 1 0 auto;
  width: 100%;
  padding: 15px;
  font-size: 14px;
}

.vue-dialog div {
  box-sizing: border-box;
}

.vue-dialog .vue-dialog-buttons {
  display: flex;
  flex: 0 1 auto;
  width: 100%;
  border-top: 1px solid #eee;
}

.vue-dialog button {
  letter-spacing: 1px;
}

.vue-dialog-button {
  font-size: 12px !important;
  text-transform: uppercase;
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  color: inherit;
  font: inherit;
  outline: none;
}
</style>
