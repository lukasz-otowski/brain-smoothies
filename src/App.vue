<template>
  <div id="app">
    <navbar/>
    <router-view/>
    <mainFooter/>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import mainFooter from '@/components/footer'

export default {
    name: 'App',
    data(){
      return{
      }  
    },
    components: {
        mainFooter,
        navbar
    }
}

</script>

<style>
body {
        background: url(assets/pexels.jpg) center / cover;
        background-blend-mode: multiply;
    }

</style>