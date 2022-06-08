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

    <div class="w-full">userProfileId = {{userProfileId}}</div>
    <div class="w-full">displayName = {{displayName}}</div>
    <div class="w-full">statusMessage = {{statusMessage}}</div>
    <div class="w-full">txtName = {{txtName}}</div>
    <div class="w-full">txtPhone = {{txtPhone}}</div>

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

  methods: {
    submitForm() {

      if (confirm("ต้องการบันทึกข้อมูล?")) {
        // console.log(this.txtName)
        // console.log(this.txtPhone)

        if (!liff.isLoggedIn()) {
          liff.login();
        } else {
          

          console.log(liff.getProfile())

          liff.getProfile().then(profile => {
            this.userProfileId = profile.userId;
            this.displayName = profile.displayName;
            this.statusMessage = profile.statusMessage;
          }).catch(
            err => console.error(err)
          )

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
}
</script>

<style>

</style>