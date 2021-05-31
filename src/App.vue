<template>
  <div id="app">
    <main-content></main-content>
  </div>
</template>

<script>
import mainContent from "./components/common/mainContent/mainContent";

export default {
  name: 'app',
  components: {
    mainContent
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  text-decoration: none;
  user-select: none;
}
</style>
