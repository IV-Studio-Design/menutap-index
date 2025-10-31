<script setup lang="ts">
import z, { ZodIssueCode, type ZodIssue } from 'zod';

    useHead({
        title: "Criar Negócio - MenuTap"
    });

    const shop_name = ref<string>('');
    const name = ref<string>('');
    const email = ref<string>('');
    const password = ref<string>('');
    const confirmPassword = ref<string>('');
    const termsReaded = ref<boolean>(false);

    const showPassword = ref<boolean>(false);
    const showConfirmPassword = ref<boolean>(false);

    const formIssues = ref<ZodIssue[]>();
    const sucessMessage = ref<string>('');

    const passwordSchema = z.string()
        .min(8, "Precisa ter no minimo 8 caracteres")
        .regex(/[A-Z]/, {message: 'Precisa ter uma letra maiuscula'})
        .regex(/[0-9]/, {message: 'Precisa ter um número'})
        .regex(/[!@#$%^&*]/, {message: 'Precisa ter um caractere especial (!@#$%^&*)'});

    const formSchema = z.object({
        shop_name: z.string().nonempty("Campo não pode ser vazio").min(4, "Campo precisa ter no minimo 4 caracteres"),
        name: z.string().nonempty("Campo não pode ser vazio"),
        email: z.string().email("Escreva um email válido"),
        password: passwordSchema,
        confirmPassword: z.string(),
        termsReaded: z.boolean().refine(value => value, {
            message: 'Por favor, leia e aceite os Termos e Política de Privacidade'
        })
    }).refine(data => data.password === data.confirmPassword, {
        message: "Senhas não coincidem",
        path: ['confirmPassword'],
    })

    function validateForm(){
        const data = {
            shop_name: shop_name.value,
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            termsReaded: termsReaded.value
        }

        try{
            formSchema.parse(data);
        }catch(error){
            if(error instanceof z.ZodError){
                formIssues.value = error.issues;
                return error.issues
            }
        }
    }

    async function submit(){
        sucessMessage.value = '';
        formIssues.value = [];

        const data = {
            shop_name: shop_name.value,
            name: name.value,
            email: email.value,
            password: password.value,
            confirmPassword: confirmPassword.value,
            termsReaded: termsReaded.value
        }

        const issues = validateForm()
        if(issues?.length) return;

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
                navigateTo('/dashboard');
            }
        }catch(err: any){
            const { error } = err.data.error
            formIssues.value = error
        }

    }
</script>

<template>
    <div
        class="w-full h-screen flex flex-col justify-center items-center bg-tapOrange bg-[url('@/assets/images/waves-background.png')] bg-cover bg-center bg-no-repeat p-2">
        <img class="w-36" src="@/assets/images/menutap_logo_white.png" alt="menutap logo" />

        <h1 class="font-raleway font-bold text-2xl text-neutral-200 mt-1">Crie sua loja grátis</h1>

        <p v-show="sucessMessage" class="text-green-500 mt-2">{{ sucessMessage }}</p>

        <form @submit.prevent method="post" class="w-full max-w-xl flex gap-3 flex-col justify-center items-center border border-tapOrange rounded-xl mt-5">
            <div class="w-full">
                <p class="text-white font-raleway font-medium pl-2">Nome da sua marca</p>
                <div class="w-full h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                    <input
                        v-model="shop_name"
                        class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300"
                        type="text"
                        name="shop_name"
                        placeholder="Exemplo: Loja MenuTap"
                    >
                </div>
                <p
                    class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                    {{ issues.path[0] === 'shop_name' ? issues.message : '' }}
                </p>
            </div>

            <div class="w-full mt-3 space-y-3">
                <div class="w-full flex flex-col sm:flex-row gap-3 justify-center items-start">
                    <div class="w-full">
                        <p class="text-white font-raleway font-medium pl-2">Nome</p>
                        <div class="w-full h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                            <input
                                v-model="name"
                                class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300"
                                type="text"
                                name="name"
                                placeholder="John MenuTap"
                                autocomplete="off"
                            >
                        </div>
                        <p
                            class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                            {{ issues.path[0] === 'name' ? issues.message : '' }}
                        </p>
                    </div>

                    <div class="w-full">
                        <p class="text-white font-raleway font-medium pl-2">Email</p>
                        <div class="w-full h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                            <input
                                v-model="email"
                                class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300"
                                type="email"
                                name="email"
                                placeholder="exemplo@email.com.br"
                                autocomplete="off"
                            >
                        </div>
                        <p 
                            class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                            {{ issues.path[0] === 'email' ? issues.message : '' }}
                        </p>
                    </div>
                </div>

                <div class="w-full flex flex-col sm:flex-row gap-3 justify-center items-start">
                    <div class="w-full">
                        <p class="text-white font-raleway font-medium pl-2">Senha</p>
                        <div class="w-full h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                            <input
                                v-model="password"
                                class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300"
                                :type="showPassword ? 'text' : 'password'"
                                name="password"
                                placeholder="Defina sua senha"
                            >
                            <button @click="showPassword = !showPassword" type="button" class="pr-5">
                                <IconsEye v-show="!showPassword" width="16" height="16" fill="#fe892c" />
                                <IconsEyeOff v-show="showPassword" width="16" height="16" fill="#fe892c" />
                            </button>
                        </div>
                        <p
                            class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                            {{ issues.path[0] === 'password' ? issues.message : '' }}
                        </p>
                    </div>
                    <div class="w-full">
                        <p class="text-white font-raleway font-medium pl-2">Confirme sua senha</p>
                        <div class="w-full h-12 flex items-center bg-white overflow-hidden rounded-2xl">
                            <input
                                v-model="confirmPassword"
                                class="w-full h-full font-raleway bg-none pl-6 outline-none placeholder:font-raleway placeholder:text-sm placeholder:text-neutral-300"
                                :type="showConfirmPassword ? 'text' : 'password'"
                                name="password"
                                placeholder="Confirme sua senha"
                            >
                            <button @click="showConfirmPassword = !showConfirmPassword" type="button" class="pr-5">
                                <IconsEye v-show="!showConfirmPassword" width="16" height="16" fill="#fe892c" />
                                <IconsEyeOff v-show="showConfirmPassword" width="16" height="16" fill="#fe892c" />
                            </button>
                        </div>
                        <p
                            class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                            {{ issues.path[0] === 'confirmPassword' ? issues.message : '' }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <label class="flex gap-4 items-center group cursor-pointer">
                    <input
                        v-model="termsReaded" 
                        class="hidden"
                        type="checkbox" 
                        name="termsReaded" 
                    />
                    <div class="w-4 h-4 bg-transparent border border-neutral-300 group-has-[:checked]:bg-tapOrange rounded transition-all">
                        <div class="w-full h-full bg-white check-path hidden group-has-[:checked]:block"></div>
                    </div>
                    <p class="font-raleway text-white text-sm">
                        Aceito os
                        <a href="#" class="font-semibold hover:underline">Termos</a>
                        e a
                        <a href="#" class="font-semibold hover:underline">Política de Privacidade</a>
                        da MenuTap.
                    </p>
                </label>
                <p
                    class="text-sm text-red-700 pl-2 mt-1" v-for="issues in formIssues">
                    {{ issues.path[0] === 'termsReaded' ? issues.message : '' }}
                </p>
            </div>

            <button @click="submit" type="submit" class="cursor-pointer text-tapOrange font-raleway font-bold bg-white hover:bg-neutral-200 transition-all px-24 sm:px-32 py-2 rounded-xl mt-10">
                Criar loja grátis
            </button>
        </form>


        <p class="font-raleway text-white text-xs mt-3">Já tem uma loja na MenuTap? <NuxtLink to="/dashboard/login" class="font-semibold hover:underline">Fazer login</NuxtLink></p>
    </div>
</template>