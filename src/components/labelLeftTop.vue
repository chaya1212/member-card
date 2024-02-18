<script setup>


</script>

<template>
        <div id="leftTop" role="tabpanel" aria-labelledby="leftTop-tab" class="px-4 py-2">
            <div class="bg-[#FB7AC0] px-[.3rem] border border-black relative left-[85%] inline-flex items-center">
                <img src="@/assets/image/img_star.svg">
                <p class="text-black">必填</p>
            </div>

            <label for="user_name" class="flex items-center	 block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                <span>請輸入名稱</span>
                <img src="@/assets/image/img_star.svg">
            </label>
            <div class="flex w-full">
                <input type="text" id="user_name"
                    class="me-[.5rem] bg-gray-50 border border-black shadow-[2px_1px_0_1px_black] text-gray-900 text-sm focus:border-[#25E9F2] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Chaya wang" required />
                <div class="border border-black shadow-[2px_1px_0_1px_black] h-auto w-[45px]">
                    <input class="w-full h-full" id="nativeColorPicker1" type="color" value="#000000" />
                </div>
            </div>

            <label for="user_name" class="flex items-center	 block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                <span>請輸入職位名稱</span>
                <img src="@/assets/image/img_star.svg">
            </label>
            <div class="flex w-full">
                <input type="text" id="user_name"
                    class="me-[.5rem] bg-gray-50 border border-black shadow-[2px_1px_0_1px_black] text-gray-900 text-sm focus:border-[#25E9F2] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="UI設計師" required />
                <div class="border border-black shadow-[2px_1px_0_1px_black] h-auto w-[45px]">
                    <input class="w-full h-full" id="nativeColorPicker1" type="color" value="#000000" />
                </div>
            </div>

            <label for="user_name" class="flex items-center	 block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                <span>請輸入電話號碼</span>
                <img src="@/assets/image/img_star.svg">
            </label>
            <div class="flex w-full">
                <input type="text" id="user_name"
                    class="me-[.5rem] bg-gray-50 border border-black shadow-[2px_1px_0_1px_black] text-gray-900 text-sm focus:border-[#25E9F2] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="09xx-xxx-xxx" required />
                <div class="border border-black shadow-[2px_1px_0_1px_black] h-auto w-[45px]">
                    <input class="w-full h-full" id="nativeColorPicker1" type="color" value="#000000" />
                </div>
            </div>

        </div>
</template>