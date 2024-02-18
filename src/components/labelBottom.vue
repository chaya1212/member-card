<script setup>
import AddModal from './AddModal.vue';
</script>

<template>
    <div class="hidden p-3 ms-[.5rem]" id="bottom" role="tabpanel" aria-labelledby="bottom-tab">
            <div class="grid grid-cols-4 gap-4 mt-[1.5rem]">
                <button data-modal-target="add-modal" data-modal-toggle="add-modal"
                    class="max-w-[74px] max-h-[74px] w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2] delete_item">
                    <img class="w-[2.5rem] mx-auto" src="@/assets/image/btn_add.svg">
                </button>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
            </div>
            <div class="grid grid-cols-4 gap-4  mt-[1.5rem]">
                <div class="max-w-[74px] max-h-[74px] w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]">
                    <img class="w-[2.5rem] mx-auto mt-[.7rem]" src="@/assets/image/btn_add.svg">
                </div>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
                <div class="max-w-[74px] max-h-[74px]  w-[7vw] h-[7vw] border-dashed border-2 border-[#25E9F2]"></div>
            </div>
        </div>
    <AddModal />
</template>

