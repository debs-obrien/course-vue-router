<template>
  <div class="wrapper">
    <h1>All Destinations</h1>
        <div class="all-destinations">
            <div v-for="destination in destinations" 
                :key="destination.name" 
                class="destinations"
            >
                <router-link :to="destination.slug">
                    <h2>{{ destination.name }}</h2>
                </router-link>
                <figure>
                    <img :src="require(`@/assets/${destination.image}.jpg`)" />
                </figure>
            </div>
        </div>
      <router-view />
  </div>
</template>

<script>
import store from '@/store.js'

export default {
    data: function() {
        return {
            destinations: store.destinations,
        }
    },
}
</script>

<style scoped>
.wrapper{
    max-width: 1400px;
    margin: 0 auto;
}
.all-destinations{
    display:flex;
    justify-content: center;

}
img{
    max-width: 200px;
}
a{
    color: lightseagreen;
    text-decoration:none;
}
a:hover, a:visited{
    text-decoration:underline;
}
.router-link-active{
    color:dodgerblue;
}
</style>