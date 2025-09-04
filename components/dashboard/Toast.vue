<script setup lang="ts">
    const { deleteToast } = useToastStore();
    const { toast } = defineProps(['toast']);

    const colorsType: any = {
        sucess: 'green',
        error: 'red',
        alert: '#f5831e',
    }

    const textsType: any = {
        sucess: 'Sucesso',
        error: 'Erro',
        alert: 'Alerta',
    }

    const toastColor = ref(colorsType[toast.type])

    setTimeout(() => {
        deleteToast(toast.id)
    }, toast.time)
</script>

<template>
    <div class="w-72 h-16 flex flex-col bg-tapGray toast-border rounded-lg overflow-hidden shadow-md">
        <div class="w-full h-full flex gap-2 justify-start items-center px-2 py-1">
            <div v-show="toast.type === 'sucess'">
                <IconsCheckCircle width="32" height="32" fill="green" />
            </div>
            <div v-show="toast.type === 'error'">
                <IconsCloseCircle width="32" height="32" fill="red" />
            </div>
            <div v-show="toast.type === 'alert'">
                <IconsInfoCircle width="28" height="28" fill="#f5831e" />
            </div>
            <div>
                <p class="font-raleway font-semibold">{{ textsType[toast.type] }}</p>
                <p class="font-raleway text-sm">{{ toast.message }}</p>
            </div>
        </div>
        <div class="w-full h-1 bg-neutral-300">
            <div class="w-full h-full toast-background progressBar" :style="`animation-duration:${toast.time}ms`"></div>
        </div>
    </div>
</template>

<style>
    .progressBar {
        animation-name: progressBar;
        animation-fill-mode: both;
    }
    @keyframes progressBar {
        0% {
            width: 100%
        }
        100% {
            width: 0%
        }
    }

    .toast-background {
        background-color: v-bind(toastColor);
    }

    .toast-border {
        border-width: 2px;
        border-color: v-bind(toastColor);
    }
</style>