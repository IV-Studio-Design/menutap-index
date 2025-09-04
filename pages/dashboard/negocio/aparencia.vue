<script setup lang="ts">
    useHead({
        title: "Meu negócio - Dashboard"
    });

    definePageMeta({
        name: "Meu Negócio - Aparência",
        middleware: ['auth'],
        layout: "dashboard"
    });

    const brand_color = ref<string>('#F5831E');

    const selectingColor = (e: any) => brand_color.value = e.target.value;

</script>

<template>
    <div class="w-full mt-5">
        <div class="flex gap-28 items-center">
            <label class="flex gap-3 items-center font-raleway cursor-pointer">
                <span class="font-bold">Escolha a cor tema:</span>
                <input @input="selectingColor" class="hidden" type="color" value="#F5831E">
                <div class="w-28 h-6 rounded-xl" :style="{ backgroundColor: brand_color }"></div>
            </label>
            <div class="flex gap-5 items-center">
                <button type="button" class="bg-transparent font-raleway font-bold border-2 border-neutral-400 text-neutral-400 px-8 py-1.5 rounded-xl">Reverter</button>
                <button type="submit" class="bg-tapOrange font-raleway font-bold border-2 border-tapOrange text-white px-10 py-1.5 rounded-xl">Salvar</button>
            </div>
        </div>
        
        <div class="flex gap-10">
            <div class="w-full max-w-3xl mt-5 overflow-hidden rounded-xl bg-white">
                <header class="w-full bg-white">
                    <div class="w-full h-36 bg-color">
                        
                    </div>
                    <div class="w-full flex gap-5 items-center ml-28 px-4">
                        <div class="min-w-24 min-h-24 bg-color border rounded-3xl overflow-hidden -translate-y-9 flex justify-center items-center">
                            <!-- <img class="hidden" src="" />
                            <IconsAdd width="72" height="72" stroke="#e5e5e5"/> -->
                        </div>
                        <div class="w-full flex gap-2 flex-col -translate-y-3">
                            <div class="w-full flex gap-5 items-center">
                                <div class="w-72 h-4 rounded-xl bg-neutral-200"></div>
                                <div class="w-4 h-4 rounded-md bg-neutral-200"></div>
                                <div class="w-4 h-4 rounded-md bg-neutral-200"></div>
                            </div>
                            <div class="flex gap-10 items-center">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                            </div>            
                        </div>
                    </div>
                </header>
                <div>
                    <div class="scale-[0.8] w-full flex gap-2 items-center px-2 py-1">
                        <div class="w-32 category-button bg-color"></div>
                        <div class="w-24 category-button"></div>
                        <div class="w-24 category-button"></div>
                        <div class="w-16 category-button"></div>
                        <div class="w-36 category-button"></div>
                        <div class="w-32 category-button"></div>
                        <div class="w-20 category-button"></div>
                    </div>
                    <div class="scale-[0.8] mt-12 flex gap-8 justify-center items-center">
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                    </div>
                    <div class="scale-[0.8] mt-3 flex gap-8 justify-center items-center">
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div class="w-full max-w-sm mt-5 overflow-hidden rounded-xl bg-white">
                <header class="w-full">
                    <div class="w-full h-36 bg-color">
                        <!-- IMAGE -->
                    </div>
                    <div class="w-full flex gap-5 items-center ml-6 px-4">
                        <div class="min-w-24 min-h-24 bg-color border rounded-3xl overflow-hidden -translate-y-9">
                            <img src="">
                        </div>
                        <div class="w-full flex gap-2 flex-col -translate-y-3">
                            <div class="w-full flex gap-5 items-center">
                                <div class="w-24 h-4 rounded-xl bg-neutral-200"></div>
                                <div class="w-4 h-4 rounded-md bg-neutral-200"></div>
                                <div class="w-4 h-4 rounded-md bg-neutral-200"></div>
                            </div>
                            <div class="flex gap-10 items-center">
                                <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                            </div>            
                        </div>
                    </div>
                </header>
                <div>
                    <div class="scale-[0.8] w-full overflow-hidden flex gap-2 items-center px-2 py-1">
                        <div class="min-w-32 category-button bg-color"></div>
                        <div class="min-w-24 category-button"></div>
                        <div class="min-w-24 category-button"></div>
                        <div class="min-w-16 category-button"></div>
                    </div>
                    <div class="scale-[0.8] mt-5 flex flex-col gap-8 justify-center items-center">
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                        <div class="w-80 h-24 flex gap-3 items-center relative">
                            <div class="w-36 h-24 bg-neutral-200 rounded-2xl overflow-hidden"></div>
                            <div class="w-full space-y-2 sm:space-y-1">
                                <div class="w-32 h-3 rounded-xl bg-neutral-200"></div>
                                <div class="w-20 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-16 h-2 rounded-xl bg-neutral-200"></div>
                                <div class="w-full flex justify-between items-center">
                                    <div class="w-20 h-3 rounded-xl bg-neutral-200"></div>
                                    <div class="w-28 h-6 rounded-xl bg-color"></div>
                                </div>
                            </div>

                            <span class="order-amount bg-color"></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .order-amount {
        @apply w-6 h-6 absolute pb-0.5 -top-2 -left-2 rounded-full border-[3px] border-white
    }
    .category-button {
        @apply first:ml-auto last:mr-auto bg-neutral-200 rounded-xl py-2.5
    }
    .bg-color {
        background-color: v-bind(brand_color);
    }
</style>