<script setup lang="ts">
    useHead({
        title: "Pedidos - Dashboard"
    });

    definePageMeta({
        name: "Pedidos",
        middleware: ['auth'],
        layout: "dashboard"
    });
</script>

<template>
    <div>
        pedidos
    </div>
</template>