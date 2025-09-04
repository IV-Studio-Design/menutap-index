<script setup lang="ts">
    useHead({
        title: "Dashboard"
    });

    definePageMeta({  
        name: "Dashboard",
        middleware: ['auth'],
        layout: "dashboard"
    });
</script>

<template>
    <div>
        dashboard
    </div>
</template>