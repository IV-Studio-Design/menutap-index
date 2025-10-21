<script setup lang="ts">
    useHead({
        title: "Login - Dashboard"
    });

    const { loggedIn, fetch } = useUserSession()

    await fetch()

    if(loggedIn.value){
        await navigateTo('/dashboard/')
    }

    const email = ref<string>('');
    const password = ref<string>('');

    const showPassword = ref<boolean>(false)
    const errorMessage = ref<string>('')
    const sucessMessage = ref<string>('')

    async function submit(){
        sucessMessage.value = ''
        errorMessage.value = ''

        try {
            const { sucess, message } = await $fetch('/api/user/login', {
                method: 'POST',
                body: {
                    email: email.value,
                    password: password.value
                }
            })
            if(sucess) {
                sucessMessage.value = message
                await navigateTo('/dashboard/');
            }
        }catch(error: any){
            const { message } = error.data
            errorMessage.value = message
        }
        
    }

</script>

<template>
    <div class="w-full h-screen flex flex-col justify-center items-center bg-tapOrange bg-[url('@/assets/images/waves-background.png')] bg-cover bg-center bg-no-repeat">
        <img class="w-36" src="@/assets/images/menutap_logo_white.png" alt="menutap logo" />

        <p v-show="errorMessage" class="text-red-700 mt-2">{{ errorMessage }}</p>
        <p v-show="sucessMessage" class="text-green-500 mt-2">{{ sucessMessage }}</p>

        <form @submit.prevent method="post" class="w-72 flex flex-col justify-center items-center border border-tapOrange rounded-xl mt-5">
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                <input v-model="email" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" type="email" name="email" placeholder="Email ou Usuário">
            </div>
            <div class="w-72 h-12 flex items-center bg-white overflow-hidden rounded-2xl mt-4">
                <input v-model="password" class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300" :type="showPassword ? 'text' : 'password'" name="password" placeholder="Senha">
                <button @click="showPassword = !showPassword" type="button" class="pr-5">
                    <IconsEye v-show="!showPassword" width="16" height="16" fill="#fe892c" />
                    <IconsEyeOff v-show="showPassword" width="16" height="16" fill="#fe892c" />
                </button>
            </div>
            <div class="w-full text-right">
                <button type="button" class="font-raleway text-white text-xs hover:underline mt-2">Esqueci minha senha</button>
            </div>

            <button @click="submit" type="submit" class="text-tapOrange font-raleway font-bold bg-white hover:bg-neutral-200 transition-all  px-12 py-1.5 rounded-xl mt-5">Entrar</button>
        </form>
        <p class="text-white font-raleway text-xs mt-3">
            Ainda não possui uma conta?
            <NuxtLink to="/crie-seu-negocio" class="underline hover:text-neutral-200 transition-all">Cadastre-se</NuxtLink></p>
    </div>    
</template>