<script setup lang="ts">
    const open_menu = ref<boolean>(false);
</script>

<template>
    <div class="w-full">
        <button @click="open_menu = !open_menu" class="w-full flex justify-between items-center font-raleway font-light text-white py-1">
            <div class="flex gap-2 items-cente">
                <slot name="title"/>
            </div>
            <div :style="open_menu ? { rotate: '180deg' } : { rotate: '0deg'}">
                <IconsChevronDown width="12" height="12" stroke="#fff" />
            </div>
        </button>
        <div v-show="open_menu" class="pl-4">
            <ul>
                <slot name="links" />
            </ul>
        </div>
    </div>
</template>