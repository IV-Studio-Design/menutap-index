<script setup lang="ts">
    useHead({
        title: "Dashboard"
    });

    definePageMeta({  
        name: "Dashboard",
        middleware: ['auth'],
        layout: "dashboard"
    });

    const toggleDelivery = ref<boolean>(false);

    const tiredMenu = useTemplateRef('tiredMenu');

    const toggleTiredMenu = (event: Event) => {
        tiredMenu.value?.toggle(event);
    }

</script>

<template>
    <div class="w-full">
        <h2 class="font-semibold font-raleway text-2xl mt-3 mb-10">Dashboard</h2>

        <div class="w-full flex justify-start items-start">
            <div class="grid gap-5 grid-cols-3 grid-row-3">

                <div class="w-[370px] h-[175px] flex flex-col justify-between bg-white rounded-3xl">
                    <div class="w-full h-full px-7 pt-5 flex flex-col">
                        <div class="flex gap-2 items-center">
                            <div class="w-16 h-16 bg-neutral-400 rounded-xl"></div>

                            <div class="space-y-1">
                                <p class="font-raleway font-semibold text-xl">MenuTap - Site Delivery</p>
                                <div class="flex justify-between items-center">
                                    <div class="w-48 flex gap-2 px-4 py-1 justify-between items-center bg-[#35cba1]/20 rounded-lg">
                                        <p class="text-[#24b63c] font-raleway font-bold text-sm">Delivery Aberto</p>

                                        <label class="w-8 h-4 rounded-3xl bg-neutral-500 group has-[:checked]:bg-[#24b63c] p-0.5 transition-all">
                                            <input v-model="toggleDelivery" type="checkbox" class="hidden" name="visible" />
                                            <div class="w-3 h-full bg-white rounded-full ml-0 group-has-[:checked]:ml-4 transition-all"></div>
                                        </label>
                                    </div>
                                    
                                    <div>
                                        <button class="cursor-pointer mt-2" @click="toggleTiredMenu" aria-haspopup="true" aria-controls="overlay_tmenu">
                                            <IconsThreeDots class="rotate-90" width="18" height="18" fill="#000"/>
                                        </button>
                                        <TieredMenu
                                            ref="tiredMenu"
                                            id="overlay_tmenu"
                                            pt:root="mt-2"
                                            pt:rootlist="w-28 bg-white rounded rounded-lg shadow-md p-2 font-raleway"
                                            :model="[{label: 'Link 1'}, {label: 'Link 2'}, {label: 'Link 3'}]"
                                            popup
                                        >
                                            <template #item="{label}">
                                                <NuxtLink to="/dashboard">
                                                    {{ label }}
                                                </NuxtLink>
                                            </template>
                                        </TieredMenu>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full flex justify-between items-center py-3">
                            <div class="flex items-center gap-2">
                                <img src="@/assets/images/icons/delivery-bike.svg">
                                <p class="text-sm font-raleway font-bold whitespace-nowrap text-neutral-300">30 ~ 45min.</p>
                            </div>

                            <div class="flex gap-2 items-center">
                                <a>
                                    <IconsInfoCircleOutline width="16" height="16" fill="#F8A931" stroke="#F8A931" />
                                </a>
                                <a>
                                    <IconsShareOutline width="16" height="16" stroke="#F8A931" />
                                </a>
                            </div>
                        </div>

                        <!-- <NuxtLink to="/dashboard" class="text-xs font-raleway text-neutral-400 hover:underline self-end">Gerenciar loja -></NuxtLink> -->
                    </div>
                    
                    <div class="w-full h-7 rounded-b-3xl bg-gradient-to-r from-tapOrange to-tapOrangeLight"></div>

                </div>

                <div class="w-[370px] h-[175px] bg-white rounded-3xl">
                    <div class="w-full h-full px-7 py-5 flex flex-col justify-between">
                        <p class="font-raleway font-semibold text-2xl">Faturamento</p>
                        <div class="flex justify-between">
                            <div class="space-y-2">
                                <p class="font-bold text-3xl">R$ 2.765,98</p>
                                <div class="w-fit flex gap-x-1 items-center px-2 py-0.5 bg-[#35cba1]/20 rounded-lg">
                                    <IconsArrowUp width="16" height="16" stroke="#24b63c" />
                                    <p class="w-fit font-bold text-sm text-[#24b63c]">
                                        37,2%
                                    </p>
                                </div>
                            </div>

                            <div class="-translate-y-2">
                                <DashboardGenericBalance :id="1" :data="[2000, 1000, 5000, 2000, -1200, 1000, 4800]" />
                            </div>
                        </div>
                        <NuxtLink
                            to="/dashboard"
                            class="flex gap-x-1 items-center text-xs font-raleway text-neutral-400 hover:underline self-end"
                            >
                            Ver relatório completo
                            <IconsArrowForward class="mt-0.5" width="10" height="10" stroke="#a1a1a1" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="w-[370px] h-[175px] bg-white rounded-3xl">
                    <div class="w-full h-full px-7 py-5 flex flex-col justify-between">
                        <p class="font-raleway font-semibold text-2xl">Pedidos Totais</p>
                        <div class="flex justify-between">
                            <div class="space-y-2">
                                <p class="font-bold text-3xl">78 Pedidos</p>
                                <div class="w-fit flex gap-x-1 items-center px-2 py-0.5 bg-[#35cba1]/20 rounded-lg">
                                    <IconsArrowUp width="16" height="16" stroke="#24b63c" />
                                    <p class="w-fit font-bold text-sm text-[#24b63c]">
                                        34%
                                    </p>
                                </div>
                            </div>
                            <div class="-translate-y-2">
                                <DashboardGenericBalance :id="2" :data="[5000, 1000, 2000, -2000, 1200, -1000, 4800]" />
                            </div>
                        </div>
                        <NuxtLink
                            to="/dashboard"
                            class="flex gap-x-1 items-center text-xs font-raleway text-neutral-400 hover:underline self-end"
                            >
                            Ver relatório de pedidos
                            <IconsArrowForward class="mt-0.5" width="10" height="10" stroke="#a1a1a1" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="w-[370px] h-[175px] col-span-2 row-span-2">
                    <DashboardGeneralBalance />
                </div>
                <div class="w-[370px] h-[175px] bg-white rounded-3xl">
                    <div class="w-full h-full px-7 py-5 flex flex-col justify-between">
                        <p class="font-raleway font-semibold text-2xl">Status dos Pedidos:</p>
                        <div class="flex gap-x-3 gap-y-2 flex-wrap">
                            <p class="px-5 py-1 font-bold font-raleway text-sm bg-neutral-400/20 text-neutral-500 rounded-xl">Pendentes: <span class="text-black">5</span></p>
                            <p class="px-5 py-1 font-bold font-raleway text-sm bg-yellow-400/20 text-yellow-500 rounded-xl">Em preparo: <span class="text-black">3</span></p>
                            <p class="px-5 py-1 font-bold font-raleway text-sm bg-orange-400/20 text-yellow-500 rounded-xl">Prontos: <span class="text-black">7</span></p>
                            <p class="px-5 py-1 font-bold font-raleway text-sm bg-green-400/20 text-green-500 rounded-xl">Entregues: <span class="text-black">62</span></p>
                        </div>
                        <NuxtLink
                            to="/dashboard"
                            class="flex gap-x-1 items-center text-xs font-raleway text-neutral-400 hover:underline self-end"
                            >
                            Gerenciar pedidos
                            <IconsArrowForward class="mt-0.5" width="10" height="10" stroke="#a1a1a1" />
                        </NuxtLink>
                    </div>
                </div>
                <div class="w-[370px] h-[175px] bg-white rounded-3xl">
                    <div class="w-full h-full px-7 py-5 flex flex-col justify-between">
                        <p class="font-raleway font-semibold text-2xl">Tempo de Atendimento:</p>
                        <div class="flex justify-between">
                            <div class="space-y-2">
                                <p class="font-bold text-3xl">17 minutos</p>
                                <div class="w-fit flex gap-x-1 items-center px-2 py-0.5 bg-[#35cba1]/20 rounded-lg">
                                    <IconsArrowUp width="16" height="16" stroke="#24b63c" />
                                    <p class="w-fit font-bold text-sm text-[#24b63c]">
                                        34%
                                    </p>
                                </div>
                            </div>
                            <div class="-translate-y-2">
                                <DashboardGenericBalance :id="3" :data="[50, 100, 5000, 3000, -1200, 4000, -5000]" />
                            </div>
                        </div>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>