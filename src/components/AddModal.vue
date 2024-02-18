<script setup>

</script>

<template>
      <div id="add-modal" tabindex="-1" aria-hidden="true"
        class="inline-flex flex-col	w-[20rem] h-full hidden m-auto overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center ">

        <body>
            <div class="create_wrap w-full bg-[#FB7AC0]">
                <div class="bg-[#FFE4F3] w-full h-[1.5rem]"></div>
                <div class=" px-4 pt-2 pb-4">
                    <div class="bg-[#FB7AC0] px-[.3rem] border border-black relative left-[85%] inline-flex items-center">
                        <img src="@/assets/image/img_star.svg">
                        <p class="text-black">必填</p>
                    </div>

                    <label for="app_item"
                        class="flex items-center block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                        <span>請選擇社群軟體</span>
                    </label>
                    <select id="app_item"
                        class="bg-gray-50 border border-black shadow-[2px_1px_0_1px_black] text-gray-900 text-sm focus:border-[#25E9F2] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose a country</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>

                    <label for="user_name"
                        class="flex items-center block mt-2 text-sm font-medium text-gray-900 dark:text-white">
                        <span>貼上個人網站連結(URL)</span>
                        <img src="@/assets/image/img_star.svg">
                    </label>
                    <div class="flex w-full">
                        <input type="text" id="user_name"
                            class="bg-gray-50 border border-black shadow-[2px_1px_0_1px_black] text-gray-900 text-sm focus:border-[#25E9F2] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="https://line.me/userID" required />
                    </div>
                </div>
                <div class="btn_group flex justify-between mx-[.5rem] mt-[1rem] pb-[1rem]">
                <div data-modal-hide="add-modal"  class="btnbtn-reset bg-[#25E9F2] p-2 border-solid border border-black">
                    <img class="w-[2rem]" src="@/assets/image/btn_reset.png">
                </div>
                <div
                    class="btn_finish bg-[#25E9F2] w-[3rem] h-[3rem] bg-no-repeat bg-contain border-solid border border-black bg-btn-create">
                </div>
            </div>
            </div>
        </body>
    </div>
</template>