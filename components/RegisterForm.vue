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

    <div>isInClient = {{isInClient}}</div>
    <div>isLoggedIn = {{isLoggedIn}}</div>
    <div>getAccessToken = {{getAccessToken}}</div>
    <div>userProfile = {{userProfile}}</div>
    <div>displayName = {{displayName}}</div>
    <div>statusMessage = {{statusMessage}}</div>
    <div>pictureUrl = {{pictureUrl}}</div>

  </div>
    
</template>

<script>

export default {

  data() {
    return {
      txtName: "",
      txtPhone: "",
      isInClient: "",
      isLoggedIn: "",
      getAccessToken: "",
      userProfile: "",
      displayName: "",
      statusMessage: "",
      pictureUrl: "",
    }
  },

  methods: {
    submitForm() {

      if (!liff.isLoggedIn()) {
        liff.login();
        this.isLoggedIn = liff.isLoggedIn()
        this.isInClient = liff.isInClient()
        this.isLoggedIn = liff.isLoggedIn()
      } else {
        this.isInClient = liff.isInClient()
        this.isLoggedIn = liff.isLoggedIn()
        this.getAccessToken = liff.getAccessToken()
        liff.getProfile().then(profile => {
          this.userProfile = profile.userId;
          this.displayName = profile.displayName;
          this.statusMessage = profile.statusMessage;
          this.pictureUrl = profile.pictureUrl;
        }).catch(
          err => console.error(err)
        );
        console.log(liff.getProfile())
      }

      // if (confirm("ต้องการบันทึกข้อมูล?")) {
        // console.log(this.txtName)
        // console.log(this.txtPhone)

        // this.$liff.closeWindow()
      // }
    }
  }
}
</script>

<style>

</style>