<template>
    <div class="w-72 h-full bg-white p-5">
        <nav>
            <ul class="space-y-5 text-center">
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
    </div>
</template>

<style scoped>
    @reference '@/assets/css/tailwind.css';

    .free-version-link {
        @apply font-bold text-tapOrange border-2 border-tapOrange rounded-md px-5 py-2
    }
    .app-header-link {
        @apply font-raleway text-sm
    }
</style>