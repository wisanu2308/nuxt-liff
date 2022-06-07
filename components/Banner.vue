<template>
  <div class="bg-slate-200 py-4 mb-10">
    <div class="flex justify-center text-2xl font-bold pb-8">
      Liff App
    </div>

    <div class="flex justify-center space-x-8">
      <div
        v-for="(menu, i) in menuList"
        :key="i"
      >
        <nuxt-link 
          :to="menu.url"
          class="texk-2xl transition-all hover:font-bold"
        >
          {{menu.name}}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { url: "/", name: "Index" },
        { url: "/help", name: "Help" }
      ]
    }
  }
}
</script>