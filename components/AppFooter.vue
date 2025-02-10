<template>
    <div class="w-full bg-tapOrange">
        <footer class="w-full h-full flex flex-col justify-center items-center">
            <div class="w-full max-w-5xl flex flex-col gap-10 lg:gap-0 lg:flex-row justify-center lg:justify-between items-center px-2 py-10 lg:py-16">
                <nav class="h-20 flex gap-3 items-center lg:items-start">
                    <a><IconsFacebook width="20" height="20" fill="white"/></a>
                    <a><IconsYoutube width="20" height="20" fill="white"/></a>
                    <a><IconsInstagram width="20" height="20" fill="white"/></a>
                    <a><IconsX width="16" height="16" fill="white"/></a>
                    <a><IconsLinkedin width="20" height="20" fill="white"/></a>
                    <a><IconsPinterest width="20" height="20" fill="white"/></a>
                </nav>
                <div class="space-y-5 lg:border-x lg:border-white px-10 text-center lg:text-left">
                    <NuxtLink class="text-white font-raleway font-light">Blog da MenuTap</NuxtLink>
                    <p class="text-white font-bold text-sm font-raleway">
                        Dicas e insights para otimizar seu negócio e aprimorar a <br>
                        gestão de pedidos
                    </p>
                </div>
                <div class="space-y-5">
                    <h3 class="text-white font-raleway font-bold text-center lg:text-right">
                        Suporte e vendas <br>
                        Fale conosco pelo Whatsapp
                    </h3>
                    <p class="text-white text-sm">
                        Segunda a Sexta, das 9h ás 18h (sábados e <br>
                        domingos platão emergencial) <a class="font-bold">Saiba mais</a>
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-col gap-2 sm:gap-0 sm:flex-row justify-center items-center sm:items-start bg-white white py-5">
                <p class="font-raleway sm:pr-5 text-sm">&copy 2025 MenuTap Tecnologia</p>
                <a class="font-raleway font-bold text-sm sm:border-x sm:border-black px-5">Termos de Uso</a>
                <a class="font-raleway font-bold sm:pl-5 text-sm">Política de Privacidade</a>
            </div>
        </footer>
    </div>
</template>