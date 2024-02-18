<script setup>
// 製作頁
import HeaderView from '@/components/Header.vue';
import createCard from '@/components/createCard.vue';
import ChooseWrapVue from '@/components/ChooseWrap.vue'
import labelLeftTopVue from '../components/labelLeftTop.vue'
import labelBottom from '@/components/labelBottom.vue';
import labelRightTop from '@/components/labelRightTop.vue';
import labelBg from '@/components/labelBg.vue';
</script>

<template>
  <!--製作頁-->
  <div class="section_cantainer">
    <HeaderView />
    <div class="create_wrap w-full bg-[#FB7AC0]">
      <div class="bg-[#FFE4F3] w-full h-[1.5rem]"></div>
      <createCard />
      <div class="choose_wrap w-[calc(100%-1rem)] mx-auto bg-[#FFE4F3] shadow-[3px_3px_0_2px_black]">
        <ChooseWrapVue />
        <div id="default-tab-content" class="h-[15rem] overflow-y-auto">
          <labelLeftTopVue />
          <labelRightTop />
          <labelBottom />
          <labelBg />
        </div>
      </div>
      <div class="btn_group flex justify-between mx-[.5rem] mt-[1rem] pb-[1rem]">
        <router-link to="/">
        <div class="btn_shadow btn_border  btn_md btn_highlight bg-btn-reset">
        </div>
      </router-link>
        <router-link :to="{ name: 'done' }">
          <div class="btn_shadow btn_border btn_md btn_highlight bg-btn-create">
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>

</style>
