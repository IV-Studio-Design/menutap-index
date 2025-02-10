<template>
    <div class="w-full flex justify-center items-center bg-[url('@/assets/images/waves-background.png')] bg-center bg-cover px-2">
        <section class="w-full max-w-5xl md:h-[30rem] py-5 flex flex-col md:flex-row md:gap-8 justify-center items-center overflow-hidden">
            <img class="w-72 md:w-80 lg:w-96 -translate-x-10 md:translate-y-16 md:translate-x-0" src="@/assets/images/hero_image_woman.png" />
            <div class="space-y-3">
                <h1 class="text-center md:text-left font-bold font-raleway text-3xl sm:text-4xl">
                    Transforme o seu <br>
                    negócio com um sistema <br>
                    fácil e intuitivo;
                </h1>
                <p class="text-center md:text-left font-raleway text-lg sm:text-xl leading-6">
                    Aumente o controle do seu delivery <br>
                    com um sistema simples e eficicente. <br>
                    Comece grátis!
                </p>
                <div class="flex gap-2 sm:gap-5 justify-center sm:justify-start items-center pt-2">
                    <NuxtLink class="block font-raleway text-[13px] sm:text-[15px] font-bold text-tapOrange border-2 border-tapOrange rounded-md px-7 py-1.5">
                        VER PREÇOS
                    </NuxtLink>
                    <NuxtLink class="block font-raleway text-[13px] sm:text-[15px] bg-tapOrange font-bold text-white border-2 border-tapOrange rounded-md px-5 py-1.5">
                        USAR VERSÃO GRÁTIS
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>