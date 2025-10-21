<script lang="ts" setup>
    const showSideMenu = ref<boolean>(false);

    onMounted(() => {
        window.onresize = () => {
            if(showSideMenu.value) showSideMenu.value = false
        }
    })

</script>

<template>
    <div class="w-full h-[72px] bg-white flex justify-center items-center shadow-header z-50 sticky top-0 left-0">
        <header class="w-full max-w-4xl h-full px-2 py-6 flex justify-between items-center">
            <img class="w-28" src="@/assets/images/menutap_logo.png" />
            <nav class="hidden md:block">
                <ul class="flex gap-7 items-center">
                    <li>
                        <NuxtLink class="app-header-link" exactActiveClass="font-bold" to="/">
                            INICIO
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="app-header-link" exactActiveClass="font-bold">
                            RECURSOS
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="app-header-link" exactActiveClass="font-bold">
                            PLANOS E PREÇOS
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="app-header-link" exactActiveClass="font-bold">
                            ÁREA DO CLIENTE
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="app-header-link free-version-link" exactActiveClass="font-bold">
                            VERSÃO GRÁTIS
                        </NuxtLink>
                    </li>
                </ul>
            </nav>

            <div class="md:hidden">
                <button @click="showSideMenu = !showSideMenu" class="space-y-1 mt-1">
                    <div :class="showSideMenu ? 'button-bar rotate-45 translate-y-2' : 'button-bar'"></div>
                    <div :class="showSideMenu ? 'button-bar translate-x-5 opacity-0' : 'button-bar'"></div>
                    <div :class="showSideMenu ? 'button-bar -rotate-45 -translate-y-2' : 'button-bar'"></div>
                </button>
            </div>
        </header>

        <Transition
            enter-active-class="animate__animated animate__fadeIn"
            leave-active-class="animate__animated animate__fadeOut"
        >
            <div v-show="showSideMenu" class="w-full h-full flex justify-end bg-neutral-900/30 fixed top-[72px] left-0">
                <Transition
                    enter-active-class="animate__animated animate__slideInRight"
                    leave-active-class="animate__animated animate__slideOutRight"
                >
                    <SideMenu v-show="showSideMenu" />
                </Transition>
            </div>
        </Transition>
        
    </div>
</template>

<style scoped>
    @reference '@/assets/css/tailwind.css';

    .free-version-link {
        @apply font-bold text-tapOrange border-2 border-tapOrange rounded-md px-5 py-2
    }
    .app-header-link {
        @apply font-raleway text-[13px]
    }

    .button-bar {
        @apply w-7 h-1 bg-tapOrange rounded-lg transition-all duration-300
    }
</style>