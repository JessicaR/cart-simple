import Vue from 'vue';

Vue.component('graph', {
  template: "<div class='sc-store__graph-inner' v-bind:style='{ width: progress }'></div>",  
  props: ['value','progress']
})

export default {
  name: "Graph",
}