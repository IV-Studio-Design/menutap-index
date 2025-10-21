<script setup lang="ts">
    const { title, open } = defineProps(['title', 'open']);
    const { products } = useProductStore();

    const showContent = ref<boolean>(open);
    const content = useTemplateRef('content');

    const accordionHeight = ref<number>(65);
    const contentHeight = ref<number>(0);

    const setAccordionHeight = () => {
        contentHeight.value = content.value!.clientHeight;
    }

    onMounted(() => setAccordionHeight())

    watch(products, () => {
        nextTick(() => setAccordionHeight()) 
    }, { deep: true })
</script>

<template>
    <div ref="accordion" class="accordion" :style="showContent ? `height:${accordionHeight + contentHeight}px` : 'height: 65px; overflow: hidden'">
        <button @click="showContent = !showContent" class="w-full flex gap-2 items-center px-8 py-5">
            <p class="text-xl font-raleway font-bold text-tapOrange">{{ title }}</p>
            <div :class="showContent ? 'rotate-180 mt-1 transition-all duration-300' : 'mt-1 transition-all duration-300'">
                <IconsCaretDown width="16" height="16" fill="#fe892c" />
            </div>
        </button>
        
        <div ref="content" :class="showContent ? `opacity-1 content `: 'opacity-0 content'">
            <slot />
        </div>
    </div>
</template>

<style scoped>
    @reference '@/assets/css/tailwind.css';

    .accordion {
        @apply w-full max-w-6xl bg-neutral-100 border rounded-xl transition-all duration-300
    }
    .content {
        @apply flex justify-start items-start px-8 pb-7 transition-all duration-500
    }
</style>