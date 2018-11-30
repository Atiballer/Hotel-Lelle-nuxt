<template>
    <div>

        <cookie-law theme="blood-orange"
                    buttonText="Elfogadom"
                    buttonLink="/adatvedelem"
                    buttonLinkText="Adatvédelem">
            <div slot="message">
                Az oldal sütiket használ, további információért

            </div>
        </cookie-law>

    </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  components: { CookieLaw }
};
</script>

<style>
</style>
