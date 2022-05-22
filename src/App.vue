<template>
  <v-app>
   
    <v-main>
      <MainComp/>
    </v-main>
  </v-app>
</template>

<script>
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',

  components: {
    MainComp
  },

  data: () => ({
    //
  }),
};
</script>
