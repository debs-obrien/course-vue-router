<template>
    <div>
        <h2>{{ exp.name }}</h2>
             <div class="experience-details">
                <img
                    :src="require(`@/assets/${exp.image}.jpg`)"
                    :alt="exp.name"
                />
                <p> {{ exp.description }}</p>
            </div>                
    </div>
</template>

<script>

    import store from '@/store.js'

    export default {
        components: {  },
        props: {
            location: {
                type: String,
                required: true,
            },
            experience: {
                type: String,
                required: true,
            },
        },
        data: function() {
            return {
                
            }
        },
        computed: {
            destination() {
            return store.destinations.find(
                (destination) => destination.slug === this.location
            )
            },
            exp() {
            return this.destination.experiences.find(
                (experience) => experience.slug === this.experience
            )
            },
        },
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