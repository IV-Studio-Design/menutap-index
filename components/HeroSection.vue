<template>
    <div class="w-full flex justify-center items-center bg-[url('@/assets/images/waves-background.png')] bg-center bg-cover">
        <section class="w-full max-w-5xl h-[30rem] flex gap-8 justify-center items-center overflow-hidden">
            <img class="w-96 translate-y-16" src="@/assets/images/hero_image_woman.png" />
            <div class="space-y-3">
                <h1 class="font-bold font-raleway text-4xl">
                    Transforme o seu <br>
                    negócio com um sistema <br>
                    fácil e intuitivo;
                </h1>
                <p class="font-raleway text-xl leading-6">
                    Aumente o controle do seu delivery <br>
                    com um sistema simples e eficicente. <br>
                    Comece grátis!
                </p>
                <div class="flex gap-5 justify-start items-center pt-2">
                    <NuxtLink class="block font-raleway text-[15px] font-bold text-tapOrange border-2 border-tapOrange rounded-md px-7 py-1.5">
                        VER PREÇOS
                    </NuxtLink>
                    <NuxtLink class="block font-raleway text-[15px] bg-tapOrange font-bold text-white border-2 border-tapOrange rounded-md px-5 py-1.5">
                        USAR VERSÃO GRÁTIS
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>