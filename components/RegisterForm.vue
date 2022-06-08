<template>
  <div class="container mx-auto px-5 text-xl">
      
    <div class="text-2xl font-bold text-center">
      ลงทะเบียน
    </div>

    <div class="flex flex-col items-left py-4">
      <div>ชื่อ-นามสกุล</div>
      <div class="border px-4 py-1 mt-2 rounded-xl">
        <input 
          type="text" 
          placeholder="กรอกชื่อ-นามสกุล"
          class="outline-none" 
          v-model="txtName"
        >
      </div>
    </div>

    <div class="flex flex-col items-left py-4">
      <div>เบอร์โทร</div>
      <div class="border px-4 py-1 mt-2 rounded-xl">
        <input 
          type="text" 
          placeholder="กรอกเบอร์โทร"
          maxlength="10"
          class="outline-none" 
          v-model="txtPhone"
        >
      </div>
    </div>

    <div 
      @click="submitForm()"
      class="bg-green-600 flex justify-center py-2 my-10 rounded-full text-white cursor-pointer transition-all duration-300 hover:bg-green-700"
    >
      บันทึก
    </div>

    <!-- <div class="w-full">displayName = {{displayName}}</div> -->

  </div>
    
</template>

<script>

export default {

  data() {
    return {
      txtName: "",
      txtPhone: "",
      userProfileId: "",
      displayName: "",
      statusMessage: "",
    }
  },

  mounted () {

    if (!liff.isLoggedIn()) {
      liff.login()
    }

    liff.getProfile().then(p => {
      this.userProfileId = p.userId;
      this.displayName = p.displayName;
      this.statusMessage = p.statusMessage;
    })

  },

  methods: {
    submitForm() {
      
      if (confirm("ต้องการบันทึกข้อมูล?")) {
        liff.sendMessages([
          {
            type: "text",
            text: `ชื่อ: ${this.txtName} เบอร์โทร ${this.txtPhone}`,
          },
        ])
      }
      this.$liff.closeWindow()

    }
  }
}
</script>

<style>

</style>