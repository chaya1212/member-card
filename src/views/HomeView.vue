<script setup>
</script>

<template>
  <!-- index -->
  <div class="section_cantainer section_bg">
    <div class="relative img_wrap w-full h-full">
      <div class="top_wrap h-3/5 w-full absolute top-12 z-0 bg-no-repeat bg-img-top bg-contain me-8"></div>
      <div class="bg-[length:120%] w-full h-full	bg-img-title bg-no-repeat bg-center absolute top-2/4	-translate-y-1/2 z-10">
      </div>
      <div class="bottom_wrap h-3/5 bg-img-bottom bg-no-repeat bg-contain w-full absolute bottom-12 z-0"></div>
    </div>
    
    <router-link :to="{ name: 'about' }" class="btn_ctn absolute bottom-1/4 left-2/4 -translate-x-1/2 z-20 shadow-[2px_4px_0px_2px_black]">
      <div class="white_item bg-white w-32 h-5 border-solid border border-black text-left	">
        <ul class="inline-flex">
        <li class="rounded-2xl	w-3 h-3 bg-[#FF5B5B] mx-1"></li>
        <li class="rounded-2xl	w-3 h-3 bg-[#72FF5B]  mx-1"></li>
        <li class="rounded-2xl	w-3 h-3 bg-[#F2CF4B] mx-1"></li>
        </ul>
        
      </div>
      <div class="btn_highlight bg-[#25E9F2] w-32 h-10 border-solid border border-black" >
        <div class="bg-img-start w-full h-full bg-no-repeat mt-[0.3rem] ms-[1rem]"></div>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss">


</style>