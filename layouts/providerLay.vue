<template>
  <div>
       
    <v-app class="bg">


    <v-navigation-drawer
      v-model="rightDrawer"
      right
      app
      clipped
    >
      <v-list>

        <v-list-item>
          <v-list-item-action>
            <v-icon>
             mdi-bell
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>notifications</v-list-item-title>
        </v-list-item>


        <v-list-item>
          <v-list-item-action>
            <v-icon>
             mdi-view-dashboard
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>dashboard</v-list-item-title>
        </v-list-item>


        <v-list-item>
          <v-list-item-action>
            <v-icon>
             mdi-settings
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>setting</v-list-item-title>
        </v-list-item>


          <v-list-item>
          <v-list-item-action>
            <v-icon>
             mdi-logout
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>logout</v-list-item-title>
        </v-list-item>



      </v-list>
    </v-navigation-drawer>
     
      <v-app-bar fixed app color="orange" dark clipped-right>
        <img dark class="mr-3" src=https://i.imgur.com/L9dSmJm.png height="40"/>
        <v-toolbar-title>
           
          <h3>
            <!-- <v-icon dark>
              mdi-bitcoin
            </v-icon> -->
            Dock-Chain
          </h3>
        </v-toolbar-title>

      <v-spacer></v-spacer>

        <v-btn icon class="mx-2">
          <v-icon large dark  @click.stop="rightDrawer = !rightDrawer">mdi-account-circle</v-icon>
        </v-btn>
      </v-app-bar>
      <v-content>
        <v-container background-opacity="0.5">
          <nuxt />
        </v-container>
      </v-content>

     
      <v-footer fixed app dark>
        <span>LaZyDev &copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

    </v-app>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      right: true,
      rightDrawer: false,

    };
  }
};
</script>

<style scoped>
.bg{
    /* background: rgb(0,120,233);
    background: linear-gradient(180deg, rgba(0,120,233,1) 0%, rgba(0,142,244,1) 52%, rgba(0,212,255,1) 100%); */
    background: url(https://i.imgur.com/HJMyKem.png) no-repeat ;
    background-size: cover;
}
</style>