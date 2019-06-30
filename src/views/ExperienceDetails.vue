<template>
    <div>
        <GoBack />
        <h1>experiences</h1>
        <div v-for="destination in destinations" :key="destination.slug">
            <div v-if="location == destination.slug">
                <div v-for="experience in destination.experiences" :key="experience.slug">
                {{ $route.params.location.experience }}
                <div v-if="routeExperience == experience.slug">
                    <h2>{{ experience.title }}</h2>
                    <div>
                    <div class="experience-details">
                        <img
                        :src="require(`@/assets/${experience.image}.jpg`)"
                        alt="experience.title"
                        />
                        <p> {{ experience.description }}</p>
                    </div>
                    </div>
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
        data: function() {
            return {
            destinations: store.destinations,

            location: this.$route.params.location,
            routeExperience: this.$route.params.experience,
            }
        }
}
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experience-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
</style>