<template>
  <div id="grid">
  </div>
</template>

<script>
import Grid from '../Grid';

window.onload = () => {

    let grid = new Grid(
        window.innerWidth < 1000 ? 20 : 30,
        window.innerWidth < 1000 ? 80 : 40,
    );
    grid.setup();
    grid.resize();
};

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
    #grid {
        position: fixed;
        background: white;
    }
</style>
