<template>
  <div class="download" v-on:click="hideDownBar" v-bind:style="{display: barToggle}">
    <a href="javascript:;"><img src="http://cdn.renrenaijia.com/CDN/app/Public/images/kmjrAppV3/mobile/default/default_download.png" width="100%"></a>
    <span class="close close-download">×</span>
  </div>
</template>

<script>
  export default{
    name: 'downBar',
    data: function () {
      return { barToggle: 'block' }
    },
    methods: {
      hideDownBar: function () {
        this.barToggle = 'none'
      }
    }
  }
</script>

<style>
</style>
