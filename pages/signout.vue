<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center">
      
      <div class="text-2xl font-bold text-blue-500 py-10">ออกจากระบบเรียบร้อย</div>
      <div class="w-3/5 mx-auto">
        <div 
          @click="$liff.closeWindow()"
          class="text-xl text-white bg-green-600 px-4 py-2 text-center rounded-full cursor-pointer transition-all duration-300 hover:bg-green-500"
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
}
</script>
