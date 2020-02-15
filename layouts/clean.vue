<template>
  <div>
       
    <v-app class="light">
      <v-parallax
       height="800" src="https://files.123freevectors.com/wp-content/original/131220-dark-blue-polygon-background-graphic-design.jpg">
    
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-toolbar-title>
          <h3>
            <v-icon dark>
              mdi-bitcoin
            </v-icon>
            Dock-Chain-Test
          </h3></v-toolbar-title>


       
      </v-app-bar>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light>
                mdi-repeat
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer :fixed="fixed" app>
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