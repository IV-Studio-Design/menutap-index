<script setup lang="ts">
    const session = useUserSession()

    const openFolder = ref<boolean>(false);

    function logout(){
        session.clear()
        navigateTo('/dashboard/login')
    }
</script>

<template>
    <header class="w-72 bg-gradient-to-t from-tapOrangeLight to-tapOrange min-h-screen pt-16">
        <img class="w-28 ml-16 mb-8" src="@/assets/images/menutap_logo_white.png" alt="menutap logo" />

        <nav>
            <ul>
                <li>
                    <NuxtLink
                        class="dashboard-link"
                        exactActiveClass="active-link"
                        to="/dashboard/"
                    >
                        <IconsPieChart width="17" height="17" fill="#fff" />
                        Dashboard
                    </NuxtLink>
                </li>
            </ul>
            <div class="w-52 pl-12">
                <DashboardTreeMenu>
                    <template #title>
                        <IconsStore width="17" height="17" fill="#fff" />
                        Meu negócio
                    </template>
                    <template #links>
                        <li>
                            <NuxtLink
                                class="tree-menu-link"
                                exactActiveClass="active-link"
                                to="/dashboard/negocio/estabelecimento"
                            >
                                Estabelecimento
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink
                                class="tree-menu-link"
                                exactActiveClass="active-link"
                                to="/dashboard/negocio/aparencia"
                            >
                                Aparência
                            </NuxtLink>
                        </li>
                    </template>
                </DashboardTreeMenu>
            </div> 
        </nav>
        <div class="mt-7">
            <p class="font-raleway font-bold text-white pl-12 text-sm mb-1">Menu</p>
            <nav>
                <ul>
                    <li>
                        <NuxtLink
                            class="dashboard-link"
                            exactActiveClass="active-link"
                            to="/dashboard/pedidos"
                        >
                            <IconsCart width="17" height="17" fill="#fff" />
                            Pedidos
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="dashboard-link"
                            exactActiveClass="active-link"
                            to="/dashboard/produtos"
                        >
                            <IconsPricetag width="17" height="17" fill="#fff" />
                            Produtos
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink
                            class="dashboard-link"
                            exactActiveClass="active-link"
                            to="/dashboard/categorias"
                        >
                            <IconsFolderOpen width="17" height="17" fill="#fff" />
                            Categorias
                        </NuxtLink>
                    </li>
                </ul>
                <div class="w-52 pl-12">
                    <DashboardTreeMenu>
                        <template #title>
                            <IconsCash width="17" height="17" fill="#fff" />
                            Financeiro
                        </template>
                        <template #links>
                            <li>
                                <NuxtLink class="tree-menu-link">Visão Geral</NuxtLink>
                            </li>
                            <li>
                                <NuxtLink class="tree-menu-link">Recebimentos</NuxtLink>
                            </li>
                        </template>
                    </DashboardTreeMenu>
                </div>
            </nav>
        </div>
        <button @click="logout" class="w-32 py-1 bg-orange-600 text-white font-raleway font-bold ml-12 mt-10">Sair</button>     
    </header>
</template>

<style scoped>
    .tree-menu-link {
        @apply w-full font-raleway font-light text-[13px] text-white px-2 py-1 rounded-xl transition-all
    }
    .dashboard-link {
        @apply w-52 flex gap-2 items-center font-raleway font-light pl-12 my-1.5 py-1 rounded-r-xl text-white whitespace-nowrap transition-all
    }
    .active-link {
        @apply bg-white/20
    }
</style>