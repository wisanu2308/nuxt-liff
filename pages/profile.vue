<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center w-full">
      
      <div class="text-2xl font-bold text-blue-800 py-4">
        ข้อมูลโปรไฟล์
      </div>
      <div class="w-full lg:w-1/2 mx-auto px-4 py-4 space-y-4 text-xl">
        
        <!-- <div class="flex flex-col lg:flex-row justify-between items-left">
          <div class="font-bold">USER ID</div>
          <div>{{userProfileId}}</div>
        </div> -->

        <div class="flex flex-row justify-center">
          <!-- <div class="font-bold">Display Name</div> -->
          <div>{{displayName}}</div>
        </div>

        <!-- <div class="flex flex-row justify-between">
          <div class="font-bold">Status Message</div>
          <div>{{statusMessage}}</div>
        </div> -->

        <div class="w-full flex flex-col justify-between items-center">
          <!-- <div class="font-bold">Profile Image</div> -->
          <div class="px-8 rounded-xl"> 
            <img :src="pictureUrl" class="rounded-xl">
          </div>
        </div>

      </div>

      <div 
        @click="closeProfile()"
        class="w-1/5 bg-green-600 flex justify-center py-2 my-10 rounded-full text-white cursor-pointer transition-all duration-300 hover:bg-green-700"
      >
        ปิด
      </div>

    </div>
  </div>
</template>

<script>

export default {

  // layout: 'defaultLayout',

  data() {
    return {
      userProfileId: "",
      displayName: "",
      pictureUrl: "",
      statusMessage: "",
    }
  },

  mounted () {
    
    // if (!this.$liff.isLoggedIn()) {
    //   this.$liff.login();
    // }

    this.$liff.getProfile().then(profile => {
      this.userProfileId = profile.userId;
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
      this.statusMessage = profile.statusMessage;
    }).catch(
      err => console.error(err)
    )
  },

  methods: {
    closeProfile() {
      this.$liff.closeWindow()
    }
  },

  
}
</script>
