<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center">
      
      <RegisterForm />
      
    </div>
  </div>
</template>

<script>

export default {

  layout: 'defaultLayout',

  data () {
    return {
      message: '',
      error: ''
    }
  },
  mounted () {
    // mounted() is rendered when DOM is rendered
    // wait liff.init()
    this.$liffInit
      .then(() => {
        this.message = 'LIFF init succeeded.'
      })
      .catch((e) => {
        this.message = 'LIFF init failed.'
        this.error = e.toString()
      })
  }
}
</script>

<style>
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
