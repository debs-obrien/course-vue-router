<template>
    <div>
        <GoBack />
        <h1>experiences</h1>
        <div v-for="destination in destinations" :key="destination.slug">
            <div v-if="location == destination.slug">
                <div v-for="exp in destination.experiences" :key="exp.slug">
                <div v-if="experience == exp.slug">
                    <h2>{{ exp.title }}</h2>
                    <div>
                    <div class="experience-details">
                        <img
                        :src="require(`@/assets/${exp.image}.jpg`)"
                        alt="experience.title"
                        />
                        <p> {{ exp.description }}</p>
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
                destinations: store.destinations,
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