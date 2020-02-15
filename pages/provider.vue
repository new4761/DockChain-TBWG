<template>
  <div>
        <v-card
            class="ma-3 mb-6"
            width="400"
            height="mx-auto"
            light="true"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-2">{{title}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card
            class="ma-3 mb-6"
            width="400"
            height="mx-auto"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-2">{{name}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-card>
        <v-card
            class="ma-3 mb-6"
            width="400"
            height="mx-auto"
            outlined
            >
            <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-2">{{date}}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-card>
    <v-timeline
      :align-top="alignTop"
      :dense="dense"
      :reverse="reverse"
    >
      <v-timeline-item
        v-for="n in 3"
        :key="n"
        :fill-dot="fillDot"
        :hide-dot="hideDot"
        :icon="icon ? 'mdi-star' : ''"
        :icon-color=" iconColor ? 'deep-orange' : ''"
        :left="left"
        :right="right"
        :small="small"
      >
        <template v-slot:icon>
          <v-avatar v-if="avatar">
            <img src="http://i.pravatar.cc/64">
          </v-avatar>
        </template>
        <span slot="opposite">Tus eu perfecto</span>
        <v-card class="elevation-2">
          <v-card-title class="headline">Lorem ipsum</v-card-title>
          <v-card-text>
            กำลังดำเนินการ
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import { mapActions, mapState, mapGetters } from "vuex";
import cleanVue from '../layouts/clean.vue';
export default {
    layout:"clean",
  data: () => ({
      alignTop: false,
      avatar: false,
      dense: true,
      fillDot: false,
      hideDot: false,
      icon: false,
      iconColor: false,
      left: false,
      reverse: false,
      right: true,
      small: false,
      title:"s",
      name:"mira",
      date:"21-01-2541"

    }),
}
</script>
