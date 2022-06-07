<template>
  <div class="font-prompt">
    <Banner />
    <Nuxt />
  </div>
</template>

<script>
export default {

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