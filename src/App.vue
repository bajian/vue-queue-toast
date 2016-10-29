<template>
  <div id="app">
  <div>
    <button @click="toast()">toast</button>
  </div>
   </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  methods:{
    toast:function(){
      this.$toast.show('bajian1 this is a queue toast')
      this.$toast.show('bajian2 this is a queue toast',5000)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
