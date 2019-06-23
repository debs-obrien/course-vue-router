<template>
  <div class="home">
    <Destinations />
  </div>
</template>

<script>
// @ is an alias to /src
import Destinations from "@/components/Destinations.vue";

export default {
  name: "home",
  components: {
    Destinations
  }
};
</script>
