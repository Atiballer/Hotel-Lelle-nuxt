<template>
  <div>
    <GmapMap :center="{lat:46.7886167, lng:17.681446}"
             :zoom="16"
             map-type-id="terrain"
             style="width: 100%; max-width: 600px; height: 400px; margin: auto">
      <GmapMarker :key="index"
                  v-for="(m, index) in markers"
                  :position="{ lat:46.786883, lng:17.685008 }"
                  :clickable="true"
                  :draggable="true"
                  @click="center=m.position" />
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
    return {
      center: { lat: 46.7886167, lng: 17.681446 },
      markers: { lat: 46.7886167, lng: 17.681446 }
    };
  }
};
</script>