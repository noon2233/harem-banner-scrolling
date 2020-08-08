<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  overflow: hidden;

  font-family: 'Kosugi Maru', sans-serif;
  font-size: 15pt;
  font-weight: 300 !important;
  letter-spacing: -0.025em;
  line-height: 1.75em;

  color: $color;
  text-shadow: 0px 4px 4px #{$color-5};
}

</style>
