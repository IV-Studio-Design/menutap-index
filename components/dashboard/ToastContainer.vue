<script setup lang="ts">
    const { toasts } = useToastStore();
</script>

<template>
    <div class="fixed top-5 right-5">
        <div class="relative space-y-2">
            <TransitionGroup name="list">
                <DashboardToast v-for="toast in toasts" 
                    :toast
                    :key="toast.id"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<style setup>
    .list-move, /* apply transition to moving elements */
    .list-enter-active,
    .list-leave-active {
        transition: all .5s ease;
    }

    .list-enter-from,
    .list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
    .list-leave-active {
        position: absolute;
    }
</style>