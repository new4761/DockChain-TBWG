<template>

 <v-card
    color="black"
    dark
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item>
        <v-card
          color="transparent"
          height="450"
        >
          <v-img
                  src="https://i.imgur.com/NuPYXSK.png"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height="450px"
                >
          <v-layout
            align-center
            justify-center
            fill-height
            tag="v-card-text"
          >
                      <div>
              <h1 class="text-center display-4 font-weight-bold">DockChain</h1> <br>
              <h5 class="text-center">description and details</h5>
            </div>
          </v-layout>
          </v-img>
        </v-card>
      </v-window-item>

      
       <v-window-item>
        <v-card
          color="transparent"
          height="450"
        >
          <v-img
                  src="https://i.imgur.com/81DAMN0.png"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height="450px"
                >
          <v-layout
            align-center
            justify-center
            fill-height
            tag="v-card-text"
          >
                       <div>
              <h1 class="text-center display-4 font-weight-bold">DockChain</h1> <br>
              <h5 class="text-center">description and details</h5>
            </div>
          </v-layout>
          </v-img>
        </v-card>
      </v-window-item>

        <v-window-item>
        <v-card
          color="transparent"
          height="450"
        >
          <v-img
                  src="https://i.imgur.com/nmKY77J.png"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height="450px"
                >
          <v-layout
            align-center
            justify-center
            fill-height
            tag="v-card-text"
          >
                       <div>
              <h1 class="text-center display-4 font-weight-bold">DockChain</h1> <br>
              <h5 class="text-center">description and details</h5>
            </div>
          </v-layout>
          </v-img>
        </v-card>
      </v-window-item>

              <v-window-item>
        <v-card
          color="transparent"
          height="450"
        >
          <v-img
                  src="https://i.imgur.com/G6KyehW.png"
                  gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
                  height="450px"
                >
          <v-layout
            align-center
            justify-center
            fill-height
            tag="v-card-text"
          >
            <div>
              <h1 class="text-center display-4 font-weight-bold">DockChain</h1> <br>
              <h5 class="text-center">description and details</h5>
            </div>
          </v-layout>
          </v-img>
        </v-card>
      </v-window-item>

    </v-window>

    <v-card-actions class="justify-space-between">
      <v-btn
        flat
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-item-group
        v-model="onboarding"
        class="text-xs-center"
        mandatory
      >
        <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>

                <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>

          <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>

          <v-item>
          <v-btn
            slot-scope="{ active, toggle }"
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>


        
      </v-item-group>
      <v-btn
        flat
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>





</template>

<script>

export default {

  layout:"first",
  computed: {
    
  },
  data: () => ({
    
    length: 4,
      onboarding: 0,
      card:[
        "https://i.imgur.com/NuPYXSK.png",
        "https://i.imgur.com/81DAMN0.png",
        "https://i.imgur.com/nmKY77J.png",
        "https://i.imgur.com/G6KyehW.png"
      ]
    
  }),
  components: {
   
  },
  mounted() {
   
  },
 methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      }
    }
};
</script>


<style scoped>


</style>
