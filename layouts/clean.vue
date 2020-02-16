<template>
  <div>

       
    <v-app>
      <v-parallax
       height="800" src="https://files.123freevectors.com/wp-content/original/130904-abstract-blue-polygon-pattern-background-vector-art.jpg">
    
      <v-app-bar clipped fixed app color="blue" dark>
        <img dark class="mr-3" src=https://i.imgur.com/L9dSmJm.png height="40"/>
        <v-toolbar-title>
          <h3>
            <!-- <v-icon dark>
              mdi-bitcoin
            </v-icon> -->
            Dock-Chain
          </h3></v-toolbar-title>

           <v-spacer></v-spacer>

      </v-app-bar>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
   
      <v-footer fixed dark app>
        <span>LaZyDev &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
      </v-parallax>
    </v-app>
  
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>