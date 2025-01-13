<template>
    <div class="w-full flex justify-center items-center shadow-header">
        <header class="w-full max-w-4xl h-full py-6 flex justify-between items-center">
            <img class="w-28" src="@/assets/images/menutap_logo.png" />
            <nav>
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
        </header>
    </div>
</template>

<style scoped>
    .free-version-link {
        @apply font-bold text-tapOrange border-2 border-tapOrange rounded-md px-5 py-2
    }
    .app-header-link {
        @apply font-raleway text-sm
    }
</style>