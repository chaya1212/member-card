<script setup>

</script>

<template>
    <div id="rightTop" role="tabpanel" aria-labelledby="rightTop-tab" class="p-3 ms-[.5rem]">
        <div class="flex items-center justify-center">
                <hr class="h-[1px] w-[6rem] bg-[#B290A3] border-0 ">
                <span class="mx-[1rem] text-sm text-black dark:text-gray-400 font-semibold">點擊上傳圖片</span>
                <hr class="h-[1px] w-[6rem] bg-[#B290A3] border-0 ">
            </div>
    
            
            <label for="dropzone-file"
                class="flex flex-col items-center justify-center w-full  cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 opacity-50 hover:opacity-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <img class="w-[8rem] mx-auto" src="@/assets/image/btn_updateFile.svg">
                    
                    <p class="text-xs text-gray-500 dark:text-gray-400">圖片大小建議150x150以內</p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
            </label>

    </div>
</template>

