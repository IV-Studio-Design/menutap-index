<template>
    <div class="w-52 h-64 bg-[url('@/assets/images/card_bg.svg')] bg-cover bg-center flex justify-center relative rounded-2xl">
        <div class="w-20 h-20 absolute -top-10 flex justify-center items-center rounded-full">
            <slot name="icon" />
        </div>
        <div class="w-full h-full flex gap-4 flex-col justify-start items-center mt-3 pt-16">
            <slot name="content" />
        </div>           
    </div>
</template>