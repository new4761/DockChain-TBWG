<template>

      <v-card outlined class="pa-12" color="rgb(255,255,255,0.9" >
        <!-- 3cards -->
        <v-row justify="center" align="center" class="mb-10">
          <div class="text-center">
            <h1 class="gray">{{processName}}</h1>
            <br />

            <h5>{{processDesc}}</h5>
            <br />

            <h4>{{ date }}</h4>
          </div>
        </v-row>

        <v-row justify="center" align="center" class="mb-10 pa-6">
          <v-col cols="6">
          

            <v-stepper v-model="status" vertical>


              <template v-for="(item, index) in steps">
                <v-stepper-step :key="`${index}-step`" :complete="status > index+1" :step="index+1" class="pa-12">
                  {{ item.title }}
                  <!-- index in items = >{{index}} -->
                  <small>{{ item.date }}</small>
                  <v-spacer></v-spacer>
                  <small>{{ item.desc }}</small>
                </v-stepper-step>

                </template>

                
                <!-- <v-stepper-content>
                  <v-card color="grey lighten-1" class="mb-12">
                    {{item.desc}}
                  </v-card>
                </v-stepper-content>  -->

            </v-stepper>
          </v-col>
        </v-row>

        <v-row justify="center" align="center" class="mb-10"> </v-row>
      </v-card>

</template>

<script>
export default {
  computed: {},
  data: () => ({
    processName: " process #  ",
    processDesc:"description",
    date: "xx/xx/xx",
    status: 3,
    e6: 1,
    steps: [
      {
        id: "1",
        title: "step # 1",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 2",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 3",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 4",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 5",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 6",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
       {
        id: "1",
        title: "step # 7",
        date: "xx/xx/xx",
        desc: "desc",
        detail: "this is detail"
      },
      
     
    ]
  }),
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped></style>
