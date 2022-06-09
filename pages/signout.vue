<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center">
      
      <div class="text-2xl font-bold text-blue-300">ออกจากระบบเรียบร้อย</div>
      <div class="w-1/5 mx-auto">
        <div 
          @click="closeWindow"
          class="text-xl font-white bg-green-600 px-4 py-2 text-center transition-all duration-300 hover:bg-green-500"
        >ปิด</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  layout: 'defaultLayout',

  mounted () {

    if (this.$liff.isLoggedIn()) {
      this.$liff.logout()
      
    }
    
  },

  methods: {
    closeWindow() {
      this.$liff.closeWindow()
    }
  }
}
</script>
