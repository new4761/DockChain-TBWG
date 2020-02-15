<template>
  
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row>
          <v-col cols="6" >
            <v-row justify="end" align="center">
              <Svglogin />
            </v-row>
          </v-col>
          <v-col cols="6">
            <Login />
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  
</template>

<script>
import Login from "../components/login";
import Svglogin from "../components/svg_login";
export default {
  layout: "clean",
  props: {
    source: String
  },
  components: {
    Login,
    Svglogin
  }
};
</script>

<style scoped>

</style>
