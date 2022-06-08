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

    if (!this.$liff.isLoggedIn()) {
      this.$liff.login()
    }

    this.$liff.getProfile().then(p => {
      this.userProfileId = p.userId;
      this.displayName = p.displayName;
      this.statusMessage = p.statusMessage;
    })

  },

  methods: {
    submitForm() {
      
      if (confirm("ต้องการบันทึกข้อมูล?")) {

        this.$liff.sendMessages([
          {
            type: "text",
            text: this.displayName
          }
        ])

        // liff.sendMessages([
        //   {
        //     type: "flex",
        //     altText: "This is a Flex message",
        //     contents: {
        //       "type": "bubble",
        //       "body": {
        //         "type": "box",
        //         "layout": "vertical",
        //         "contents": [
        //           {
        //             "type": "text",
        //             "text": "ผลการลงทะเบียน",
        //             "weight": "bold",
        //             "color": "#1DB446",
        //             "size": "sm"
        //           },
        //           {
        //             "type": "text",
        //             "weight": "bold",
        //             "size": "xxl",
        //             "margin": "md",
        //             "text": `${this.txtName}`
        //           },
        //           {
        //             "type": "text",
        //             "text": "Wisanu Liff",
        //             "size": "xs",
        //             "color": "#aaaaaa",
        //             "wrap": true
        //           },
        //           {
        //             "type": "separator",
        //             "margin": "xxl"
        //           },
        //           {
        //             "type": "box",
        //             "layout": "vertical",
        //             "margin": "xxl",
        //             "spacing": "sm",
        //             "contents": [
        //               {
        //                 "type": "text",
        //                 "text": "รายละเอียด",
        //                 "weight": "bold",
        //                 "size": "xs"
        //               },
        //               {
        //                 "type": "box",
        //                 "layout": "horizontal",
        //                 "contents": [
        //                   {
        //                     "type": "text",
        //                     "text": "Name",
        //                     "size": "sm",
        //                     "color": "#555555",
        //                     "flex": 0
        //                   },
        //                   {
        //                     "type": "text",
        //                     "text": `${this.txtName}`,
        //                     "size": "sm",
        //                     "color": "#111111",
        //                     "align": "end"
        //                   }
        //                 ]
        //               },
        //               {
        //                 "type": "box",
        //                 "layout": "horizontal",
        //                 "contents": [
        //                   {
        //                     "type": "text",
        //                     "text": "Phone",
        //                     "size": "sm",
        //                     "color": "#555555",
        //                     "flex": 0
        //                   },
        //                   {
        //                     "type": "text",
        //                     "text": `${this.txtPhone}`,
        //                     "size": "sm",
        //                     "color": "#111111",
        //                     "align": "end"
        //                   }
        //                 ]
        //               }
        //             ]
        //           },
        //           {
        //             "type": "separator",
        //             "margin": "xxl"
        //           },
        //           {
        //             "type": "box",
        //             "layout": "horizontal",
        //             "margin": "md",
        //             "contents": [
        //               {
        //                 "type": "text",
        //                 "text": "ลงทะเบียนเรียบร้อย",
        //                 "color": "#aaaaaa",
        //                 "size": "xs",
        //                 "align": "end"
        //               }
        //             ]
        //           }
        //         ]
        //       }
        //     }
            
        //   },
        // ])
     
      }
      this.$liff.closeWindow()

    }
  }
}
</script>

<style>

</style>