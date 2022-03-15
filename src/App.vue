<template>
  <v-app
      v-if="!$vuetify.breakpoint.mobile"
      id="fitch"
  >
    <v-btn @click="showDialog=true">OPEN DIALOG</v-btn>
    <v-dialog v-model="showDialog">
      <v-card>
        <v-toolbar color="red" dark flat>
          <v-toolbar-title>
            <v-icon class="mr-3">mdi-account</v-icon>
            <span>TITLE</span>
          </v-toolbar-title>
          <template v-slot:extension>
            <v-tabs v-model="activeTab" slider-size="3">
              <v-tab v-for="(tab, index) in tabs" :key="index">
                {{ tab.name }}
              </v-tab>
            </v-tabs>
          </template>
        </v-toolbar>
        <v-tabs-items v-model="activeTab">
          <v-tab-item v-for="(tab, index) in tabs" :key="index">
            <component :is="tab.component" />
          </v-tab-item>
        </v-tabs-items>
        <v-card-actions>
          <v-btn @click="showDialog=false">CLOSE</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
  <div v-else>
    Deze applicatie is niet geschikt voor mobiele devices.
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'App',
    data() {
        return {
            showDialog: false,
            activeTab: 0,
            tabs: [
                { name: 'tab 1' },
                { name: 'tab 2' },
            ],
        };
    },
});
</script>
