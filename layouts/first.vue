<template>
  <div>

       
    <v-app>
      <v-parallax
       height="800" src="https://wallpaperaccess.com/full/221443.jpg">
    
      <v-app-bar clipped fixed app  dark>
        <img dark class="mr-3" src=https://i.imgur.com/L9dSmJm.png height="40"/>
        <v-toolbar-title>
          <h3>
            <!-- <v-icon dark>
              mdi-bitcoin
            </v-icon> -->
            Dock-Chain
          </h3></v-toolbar-title>

           <v-spacer></v-spacer>

     
         <v-btn to="login" class="mx-1 indigo">
          Register
         </v-btn>

         <v-btn to="/login" class="mx-1 green">
          login
         </v-btn>
       

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