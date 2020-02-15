<template> 
    <v-row>
  <v-carousel>
                <v-carousel-item src="/port.jpg" 
                                 alt="Vuetify.js" 
                                 style="width: auto;height:auto;">
                    
                </v-carousel-item>
            </v-carousel>

    <v-bottom-navigation
    :value="activeBtn"
    color="purple lighten-1"
  >
    <v-btn>
      <span>order replacement</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn>
      <span>tracking</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn>
      <span>how to</span>
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
  </v-bottom-navigation>
    </v-row>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapActions, mapState, mapGetters } from "vuex";
import cleanVue from '../layouts/clean.vue';
export default {
    layout:"clean",
  data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
  }
}
</script>
