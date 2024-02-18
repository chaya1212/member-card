<script setup>
import { onMounted, ref } from "vue";

const firstButton = ref();
onMounted(() => firstButton.value?.click())

</script>

<template>
    <div class="mb-1 border-b border-gray-200 dark:border-gray-700">
        <ul class="-mb-px grid grid-cols-4 gap-0" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">

            <li class="bg-[#25E9F2] border border-black" role="presentation" >
                <button ref="firstButton" class="inline-block px-4 py-2 w-full" id="leftTop-tab" data-tabs-target="#leftTop" type="button"
                    role="tab" aria-controls="leftTop" aria-selected="false">
                    <img class="m-auto" src="@/assets/image/nav-leftTop.svg">
                </button>
            </li>
            <li class="bg-[#25E9F2] border border-black " role="presentation" >
                <button class="inline-block px-4 py-2 w-full " id="rightTop-tab" data-tabs-target="#rightTop" type="button"
                    role="tab" aria-controls="rightTop" aria-selected="false">
                    <img class="m-auto" src="@/assets/image/nav-rightTop.svg">
                </button>
            </li>
            <li class="bg-[#25E9F2] border border-black" role="presentation">
                <button class="inline-block px-4 py-2 w-full" id="bottom-tab" data-tabs-target="#bottom" type="button"
                    role="tab" aria-controls="bottom" aria-selected="false">
                    <img class="m-auto" src="@/assets/image/nav-bottom.svg">
                </button>
            </li>
            <li class="bg-[#25E9F2] border border-black hover:bg-[#FFE4F3] active:bg-[#FB7AC0] focus:bg-[#FB7AC0]"
                role="presentation">
                <button class="inline-block px-4 py-2 w-full" id="cardBg-tab" data-tabs-target="#cardBg" type="button"
                    role="tab" aria-controls="cardBg" aria-selected="false">
                    <img class="m-auto" src="@/assets/image/nav-bg.svg">
                </button>
            </li> 
        </ul>
    </div>
</template>