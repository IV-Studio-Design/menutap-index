<template>
    <div class="w-full bg-tapOrange">
        <footer class="w-full h-full flex flex-col justify-center items-center">
            <div class="w-full max-w-5xl flex justify-between items-center py-16">
                <nav class="h-20 flex gap-3 items-start">
                    <a><IconsFacebook width="20" height="20" fill="white"/></a>
                    <a><IconsYoutube width="20" height="20" fill="white"/></a>
                    <a><IconsInstagram width="20" height="20" fill="white"/></a>
                    <a><IconsX width="16" height="16" fill="white"/></a>
                    <a><IconsLinkedin width="20" height="20" fill="white"/></a>
                    <a><IconsPinterest width="20" height="20" fill="white"/></a>
                </nav>
                <div class="space-y-5 border-x border-white px-10">
                    <NuxtLink class="text-white font-raleway font-light">Blog da MenuTap</NuxtLink>
                    <p class="text-white font-bold text-sm font-raleway">
                        Dicas e insights para otimizar seu negócio e aprimorar a <br>
                        gestão de pedidos
                    </p>
                </div>
                <div class="space-y-5">
                    <h3 class="text-white font-raleway font-bold text-right">
                        Suporte e vendas <br>
                        Fale conosco pelo Whatsapp
                    </h3>
                    <p class="text-white text-sm">
                        Segunda a Sexta, das 9h ás 18h (sábados e <br>
                        domingos platão emergencial) <a class="font-bold">Saiba mais</a>
                    </p>
                </div>
            </div>
            <div class="w-full flex justify-center bg-white white py-5">
                <p class="font-raleway pr-5 text-sm">&copy 2025 MenuTap Tecnologia</p>
                <a class="font-raleway font-bold text-sm border-x border-black px-5">Termos de Uso</a>
                <a class="font-raleway font-bold pl-5 text-sm">Política de Privacidade</a>
            </div>
        </footer>
    </div>
</template>