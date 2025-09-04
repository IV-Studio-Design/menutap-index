<script setup lang="ts">
    const { week } = defineProps(['week']);

</script>

<template>
    <div class="group w-36 h-24 flex flex-col bg-neutral-300 rounded-xl overflow-hidden">
        <div class="w-full h-10 flex justify-between items-center bg-neutral-400 group-has-[:checked]:bg-tapOrange px-4 py-2 rounded-b-xl transition-all">
            <p class="font-raleway text-neutral-600 group-has-[:checked]:text-white transitio-all">{{ week }}</p>
            <label class="w-8 h-4 rounded-3xl bg-neutral-600 has-[:checked]:bg-white p-0.5 transition-all">
                <input type="checkbox" class="hidden" name="visible" />
                <div class="w-3 h-full bg-neutral-300 group-has-[:checked]:bg-tapOrange rounded-full ml-0 group-has-[:checked]:ml-4 transition-all"></div>
            </label>
        </div>
        <div class="w-full h-full flex flex-col justify-center items-center px-5">

            <div class="w-full flex justify-between items-center">
                <p class="font-raleway text-sm text-neutral-600 font-bold">Abre:</p>
                <p class="font-raleway text-sm text-neutral-500">00:00h</p>
            </div>
            <div class="w-full flex justify-between items-center">
                <p class="font-raleway text-sm text-neutral-600 font-bold">Fecha:</p>
                <p class="font-raleway text-sm text-neutral-500">00:00h</p>
            </div>
        </div>
    </div>
</template>