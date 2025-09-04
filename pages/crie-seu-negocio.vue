<script setup lang="ts">
    useHead({
        title: "Criar Negócio - MenuTap"
    });

    const name = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const shop_name = ref<string>('');

    const showPassword = ref<boolean>(false);
    const errorMessage = ref<string>('');
    const sucessMessage = ref<string>('');

    async function submit(){
        sucessMessage.value = ''
        errorMessage.value = ''

        try {
            const response = await $fetch('/api/business', {
                method: 'POST',
                body: {
                    user: {
                        name: name.value,
                        email: email.value,
                        password: password.value  
                    },
                    shop: {
                        name: shop_name.value,
                        url_name: shop_name.value.replace(/\s/g,'').toLocaleLowerCase()
                    } 
                }
            })
            if(response?.sucess) {
                sucessMessage.value = response.message
            }
        }catch(err: any){
            const { error } = err.data
            errorMessage.value = error
        }
    }
</script>

<template>
    <div class="w-full h-screen flex flex-col justify-center items-center bg-tapOrange bg-[url('@/assets/images/waves-background.png')] bg-cover bg-center bg-no-repeat">
        <img class="w-36" src="@/assets/images/menutap_logo_white.png" alt="menutap logo" />

        <h1 class="font-raleway font-bold text-2xl text-neutral-200 mt-1">Crie o seu negócio</h1>

        <p v-show="errorMessage" class="text-red-700 mt-2">{{ errorMessage }}</p>
        <p v-show="sucessMessage" class="text-green-500 mt-2">{{ sucessMessage }}</p>

        <form @submit.prevent method="post" class="w-72 flex gap-2 flex-col justify-center items-center border border-tapOrange rounded-xl mt-5">
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                <input v-model="shop_name" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" type="text" name="shop_name" placeholder="Nome do seu negócio">
            </div>
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                <input v-model="name" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" type="text" name="name" placeholder="Seu Nome">
            </div>
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                <input v-model="email" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" type="email" name="email" placeholder="Seu email">
            </div>
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                <input v-model="password" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" :type="showPassword ? 'text' : 'password'" name="password" placeholder="Sua senha">
                <button @click="showPassword = !showPassword" type="button" class="pr-5">
                    <IconsEye v-show="!showPassword" width="16" height="16" fill="#fe892c" />
                    <IconsEyeOff v-show="showPassword" width="16" height="16" fill="#fe892c" />
                </button>
            </div>

            <button @click="submit" type="submit" class="text-tapOrange font-raleway font-bold bg-white hover:bg-neutral-200 transition-all  px-12 py-1.5 rounded-xl mt-5">Criar</button>
        </form>
    </div>    
</template>