<template>
    <div class="w-full flex justify-center items-start">
        <DashboardToastContainer />

        <DashboardNavigation />
        <div class="w-full p-24 bg-[url('@/assets/images/waves-background.png')] bg-tapGray bg-cover bg-center bg-no-repeat h-screen overflow-y-auto">
            <p class="font-relaway font-light text-neutral-400">MenuTap > <span class="text-lg font-semibold text-tapOrange">{{ $route.name }}</span></p>
            <slot />
        </div>
   </div>
</template>