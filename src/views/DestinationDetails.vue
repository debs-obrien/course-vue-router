<template>
<div>
    <GoBack />
    <div  v-for="(destination,index) in destinations" :key="index">     
        <div v-if="location == destination.slug">      
            <h1>{{destination.name}}</h1>      
            <div class="destination-details">
                <img :src="require(`@/assets/${destination.image}.jpg`)" />
                <p>{{destination.description}}</p>
            </div>
            <h2>Top experiences in {{ destination.name }}</h2>
            <div class="experiences">
                <div
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    class="experience-card"
                    >
                    <router-link
                        :to="{
                            name: 'experienceDetails',
                            params: { experience: experience.slug },
                        }"
                    >
                    <img
                        :src="require(`@/assets/${experience.image}.jpg`)"
                        :alt="experience.name"
                    />
                    <span class="experience-card__text"> {{ experience.name }}</span>
                    </router-link>
                    </div>
                </div>
            </div>
         </div>
    </div>
</template>

<script>
import store from '@/store.js'
import GoBack from '@/components/GoBack'

    export default {
        components: { GoBack },
        props: {
            location: {
            type: String,
            required: true,
            },
        },
        data: function () {
            return {
                destinations: store.destinations,
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
.experiences {
  display: flex;
  justify-content: space-between;
}
.experiences img {
  max-height: 200px;
}
.experience-card {
  padding: 0 20px;
  position: relative;
}
.experience-card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>