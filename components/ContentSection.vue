<template>
    <div class="w-full bg-gradient-to-l to-[#ffb662] from-[#f68f4b]">
        <div class="w-full flex justify-center items-center bg-[url('@/assets/images/office_bg.png')] bg-cover bg-center px-2">
            <section class="w-full max-w-5xl flex flex-wrap gap-8 justify-center items-center pt-16 pb-14 sm:pt-24 sm:pb-24">
                <div class="flex flex-wrap gap-14 sm:gap-10 justify-center items-center">
                    <ContentCard>
                        <template #icon>
                            <IconsReader width="56" height="56" fill="#fff" />
                        </template>
                        <template #content>
                            <h3 class="font-bold font-raleway text-tapOrange text-center text-lg leading-5">
                                Ponto de venda <br>
                                e cardápio digital
                            </h3>
                            <p class="font-raleway text-center leading-4">
                                Gerencie todos os <br>
                                aspectos do seu <br>
                                negócio em uma <br>
                                <strong>
                                    única plataforma.
                                </strong>
                            </p>
                        </template>
                    </ContentCard>
                    <ContentCard>
                        <template #icon>
                            <IconsWallet width="56" height="56" fill="#fff" />
                        </template>
                        <template #content>
                            <h3 class="font-bold font-raleway text-tapOrange text-center text-lg leading-5">
                                Seu Delivery, <br>
                                Sem Taxas.
                            </h3>
                            <p class="font-raleway text-center leading-4">
                                Tenha <strong>seu próprio</strong> <br>
                                site delivery <strong>sem taxas.</strong> <br>
                                Comece grátis!
                            </p>
                        </template>
                    </ContentCard>
                    <ContentCard>
                        <template #icon>
                            <IconsCheckmarkCircle width="56" height="56" fill="#fff" />
                        </template>
                        <template #content>
                            <h3 class="font-bold font-raleway text-tapOrange text-center text-lg leading-5">
                            Interface Simples <br>
                            e Intuitiva
                            </h3>
                            <p class="font-raleway text-center leading-4">
                                <strong>
                                    Sem configurações <br>
                                    complexas.
                                </strong> ou <br>
                                processos cansativos <br>
                                para você.
                            </p>
                        </template>
                    </ContentCard>
                </div>
            </section>
        </div>  
    </div>
</template>