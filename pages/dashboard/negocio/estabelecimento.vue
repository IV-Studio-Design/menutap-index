<script setup lang="ts">
    useHead({
        title: "Meu negócio - Dashboard"
    });

    definePageMeta({
        name: "Meu Negócio - Dados",
        middleware: ['auth'],
        layout: "dashboard"
    });

    const shop_url = ref<string>();
    const shop_name = ref<string>();
    const phone_number = ref<number>();
    const to_delivery = ref<boolean|null|undefined>();
    const to_pickup = ref<boolean|null|undefined>();
    const to_consume = ref<boolean|null|undefined>();
    const show_address = ref<boolean|null|undefined>()

    // const shopFetched = await useFetch(`/api/${window.location.host.split('.')[0]}`);
    // const shop = computed(() => shopFetched.data.value?.shop);

    // shop_url.value = shop.value?.url_name;
    // shop_name.value = shop.value?.name;
    // phone_number.value = Number(shop.value?.phone_number);
    // to_delivery.value = shop.value?.to_delivery;
    // to_pickup.value = shop.value?.to_pickup;
    // to_consume.value = shop.value?.to_consume;
    // show_address.value = shop.value?.show_address;

    const weekdays = [
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
        "Domingo"
    ]
</script>

<template>
    <div>
        <h2 class="font-bold font-raleway text-lg">Dados do Estabelecimento</h2>
        <div class="mt-7">
            <form @submit.prevent method="post">
                <div class="flex gap-4 items-center">
                    <label class="w-[33rem] flex items-center bg-white border border-neutral-200 rounded-xl font-raleway overflow-hidden">
                        <span class="font-semibold text-white bg-tapOrange px-8 py-2 rounded-r-xl">URL da Cardápio</span>
                        <input v-model="shop_url" type="text" class="font-semibold py-2 bg-transparent outline-none text-right border-none" />
                        <span class="font-bold text-neutral-300">.menutap.com.br</span>
                    </label>
                    <!-- <IconsCheckCircle width="28" height="28" fill="green" /> -->
                    <IconsCloseCircle width="28" height="28" fill="red" />
                </div>
                
                <div class="flex gap-16 mt-7">

                    <div class="flex gap-5 flex-col">

                        <div class="flex gap-4 flex-col">
                            <h3 class="font-raleway font-semibold">Configurações Básicas:</h3>
                            <label class="font-raleway">
                                Nome do Negócio: <br>
                                <input v-model="shop_name" type="text" class="w-72 input_style" name="shop_name" />
                            </label>

                            <div class="flex gap-2 items-center">  
                                <label class="font-raleway">
                                    Telefone / Whatsapp: <br>
                                    <input v-model="phone_number" type="tel" class="w-64 input_style" name="shop_phone"/>
                                </label>
                                <button class="mt-6">
                                   <IconsAddCircle width="28" height="28" fill="#F5831E"/>
                                </button>
                            </div>
                        </div>

                        <div class="flex gap-4 flex-col">
                            <h3 class="font-raleway font-semibold">Opções de Entrega:</h3>
                            <label class="flex gap-4 items-center group">
                                <input v-model="to_delivery" type="checkbox" name="delivery" class="hidden"/>
                                <div class="w-4 h-4 bg-white border border-neutral-300 group-has-[:checked]:bg-tapOrange rounded transition-all">
                                    <div class="w-full h-full bg-white check-path hidden group-has-[:checked]:block"></div>
                                </div>
                                <div>
                                    <p class="font-raleway">Permitir <span class="font-semibold text-tapOrange">Entregar no Endereço.</span></p>
                                    <p class="font-raleway text-neutral-400 text-sm">O cliente deseja receber o pedido por delivery</p>
                                </div>
                            </label>
                            <label class="flex gap-4 items-center group">
                                <input v-model="to_consume" type="checkbox" name="eat-in-place" class="hidden"/>
                                <div class="w-4 h-4 bg-white border border-neutral-300 group-has-[:checked]:bg-tapOrange rounded transition-all">
                                    <div class="w-full h-full bg-white check-path hidden group-has-[:checked]:block"></div>
                                </div>
                                <div>
                                    <p class="font-raleway">Permitir <span class="font-semibold text-tapOrange">Consumir no Local.</span></p>
                                    <p class="font-raleway text-neutral-400 text-sm">O cliente deseja consumir o pedido <br> no seu estabelecimento</p>
                                </div>
                            </label>
                            <label class="flex gap-4 items-center group">
                                <input v-model="to_pickup" type="checkbox" name="get-in-place" class="hidden"/>
                                <div class="w-4 h-4 bg-white border border-neutral-300 group-has-[:checked]:bg-tapOrange rounded transition-all">
                                    <div class="w-full h-full bg-white check-path hidden group-has-[:checked]:block"></div>
                                </div>
                                <div>
                                    <p class="font-raleway">Permitir <span class="font-semibold text-tapOrange">Retirar no Local.</span></p>
                                    <p class="font-raleway text-neutral-400 text-sm">O cliente deseja ir até o estabelecimento <br> para retirar o pedido</p>
                                </div>
                            </label>
                        </div>

                    </div>
                    

                    <div class="flex gap-4 flex-col">
                        <h3 class="font-raleway font-semibold">Localização:</h3>

                        <label class="font-raleway">
                            CEP: <br>
                            <input type="text" class="w-72 input_style" name="shop_city_cep"/>
                        </label>
                        <div class="flex gap-4">
                            <label class="font-raleway">
                                Endereço: <br>
                                <input type="text" class="w-72 input_style" name="shop_address" />
                            </label>
                            <label class="font-raleway">
                                N°: <br>
                                <input type="number" class="w-32 input_style" name="shop_address_number"/>
                            </label>
                        </div>
                        <div class="flex gap-4">
                            <label class="font-raleway">
                                Compl: <br>
                                <input type="text" class="w-48 input_style" name="shop_address_complement"/>
                            </label>
                            <label class="font-raleway">
                                Bairro: <br>
                                <input type="text" class="w-56 input_style" name="shop_distric"/>
                            </label>
                        </div>
                        <div class="flex gap-4">
                            <label class="font-raleway">
                                Cidade: <br>
                                <input type="text" class="w-72 input_style" name="shop_city"/>
                            </label>
                            <label class="font-raleway">
                                UF: <br>
                                <input type="text" class="w-32 input_style" name="shop_state"/>
                            </label>
                        </div>
                        <label class="flex gap-3 items-center font-raleway group">
                            <input v-model="show_address" type="checkbox" name="get-in-place" class="hidden"/> 
                            <div class="w-4 h-4 bg-white border border-neutral-300 group-has-[:checked]:bg-tapOrange rounded transition-all">
                                <div class="w-full h-full bg-white check-path hidden group-has-[:checked]:block"></div>
                            </div>
                            Exibir endereço no site  
                        </label>
                    </div>
                </div>

                <div class="flex gap-5 flex-col justify-start items-start mt-7">
                    <h3 class="font-raleway font-semibold">Dias e Horários de Funcionamento:</h3>

                    <div class="grid gap-5 grid-cols-4 grid-rows-2">
                        <DashboardWeekDay
                            v-for="weekday in weekdays"
                            :week="weekday"
                        />
                    </div>
                </div>

                <button type="submit" class="bg-tapOrange font-raleway font-bold text-white px-16 py-1.5 rounded-xl mt-12">Salvar</button>
            </form>
        </div>
    </div>
        
</template>