<template>
    <div>
        <no-ssr>
            <cookie-law theme="blood-orange"
                        buttonText="Elfogadom"
                        buttonLink="/adatvedelem"
                        buttonLinkText="Adatvédelem">
                <div slot="message">
                    Az oldal sütiket használ, további információért

                </div>
            </cookie-law>
        </no-ssr>
    </div>
</template>

<script>
import CookieLaw from "vue-cookie-law";
export default {
  components: { CookieLaw }
};
</script>

<style lang="scss">
.Cookie__content {
  font-size: 14px;
}

.Cookie__button {
  padding: 0.625em 1.125em;
  font-size: 14px;
  border-radius: 0;
}
</style>

