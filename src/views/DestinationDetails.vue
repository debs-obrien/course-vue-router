<template>
<div>
    <div  v-for="(destination,index) in destinations" :key="index">     
        <div v-if="destinationId == destination.id">      
            <h1>{{destination.name}}</h1>      
            <div class="destination-details">
            <img :src="require(`@/assets/${destination.image}.jpg`)" />
            <p>{{destination.description}}</p>
            </div>
            </div>    
         </div>
    </div>
</template>

<script>
import store from '@/store.js'

    export default {
        data: function () {
            return {
                destinations: store.destinations,
                destinationId:this.$route.params.id,
            }
         },
    }
</script>

<style scoped>
img{
   max-width: 600px;
    height: auto;
    width: 100%;
    max-height: 400px;
}
.destination-details{
    display:flex;
    justify-content: space-between;
}
p{
    margin: 0 40px;
    font-size: 20px;
    text-align: left;
}
</style>