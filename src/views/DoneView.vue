<script setup>
// 製作頁
import HeaderView from '@/components/Header.vue';
import createCard from '@/components/createCard.vue';

</script>

<template>
    <!--完成頁-->
  <div class="section_cantainer section_bg">
    <HeaderView />
    <div class="finish_wrap h-[13rem] max-h-[200px] relative bg-center bg-no-repeat bg-finish-bubble bg-contain mt-[2rem] -mb-[4rem]">
      <div class="title">
        <img class="absolute -top-[.5rem] left-[4rem]" src="@/assets/image/title_01.svg">
        <img class="absolute top-0 left-[9rem]" src="@/assets/image/title_02.svg">
        <img class="absolute bottom-[3rem] right-[5rem]" src="@/assets/image/title_03.png">
      </div>
      <img class="m-auto" src="@/assets/image/bubble_box.svg">
      <div class="">
        <img class="absolute -top-[.5rem] right-[6rem]" src="@/assets/image/graphics_face.svg">
        <img class="absolute top-0 right-[1rem]" src="@/assets/image/graphics_ sticker.png">
        <img class="absolute bottom-[5rem] left-[8rem]" src="@/assets/image/graphics_vector.png">
        <img class="absolute -top-[1.5rem] left-[12rem] w-[2rem]" src="@/assets/image/img_star.svg">
        <img class="absolute bottom-[4.5rem] right-[2rem] " src="@/assets/image/img_star.svg">
      </div>
    </div>
    <div class="create_wrap w-full bg-[#FB7AC0] pb-[3rem]">
      <div class="bg-[#FFE4F3] w-full h-[1.5rem]"></div>
      <createCard />
      <div class="btn_group flex justify-around mx-[.5rem] mt-[1rem] pb-[1rem]">
        <div class="btn_reset bg-[#25E9F2] w-[3rem] h-[3rem]  bg-no-repeat bg-[size:2rem] bg-center border-solid border border-black bg-btn-reset">
        </div>
        <div class="btn_share bg-[#25E9F2] w-[3rem] h-[3rem] bg-no-repeat bg-[size:2rem] bg-center border-solid border border-black bg-btn-share">
        </div>
        <div class="btn_download bg-[#25E9F2] w-[3rem] h-[3rem] bg-no-repeat bg-[size:2rem] bg-center border-solid border border-black bg-btn-download">
        </div>
      </div>

      <div class="mt-[1rem] bottom_wrap rounded-md w-[80%] m-auto relative bg-bg-rectangle bg-cover bg-no-repeat">
        <p class="text-black py-[1rem] ps-[2rem] pe-[1rem]">
          恭喜你完成屬於自己的名片～
喜歡的話記得分享到社群平台找朋友一起來玩，也請點我填寫使用問卷
        </p>
        <img class="absolute -top-[2rem] -left-[2rem]" src="@/assets/image/tips.svg">
      </div>
    </div>
  </div>

</template>