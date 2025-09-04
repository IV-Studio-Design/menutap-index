<script setup lang="ts">
    const { deleteCategory } = useCategoryStore();

    const { category } = defineProps(['category']);
    const emit = defineEmits(['systemUpdate', 'close']);

    const submit = async () => {
        try {
            const { message } = await $fetch(`/api/categories/${category.id}`, {
                method: 'DELETE',
            });

            deleteCategory(category.id);

            emit('systemUpdate', {sucess: true, message});
            emit('close');
        }catch(error: any){
            const { message } = error.data;
            emit('systemUpdate', {sucess: false, message});
            emit('close');
        }
    }
</script>

<template>
    <div class="w-96 bg-tapModalGray rounded-3xl shadow-md p-5">
        <p class="font-raleway font-bold text-xl text-tapOrange">Deletar categoria?</p>
        <p class="font-raleway text-sm my-5">Essa ação não pode ser desfeita.</p>

        <div class="space-x-5">
            <button @click="$emit('close')" class="bg-tapOrange font-raleway font-bold text-white px-5 py-1.5 rounded-xl">Cancelar</button>
            <button @click="submit" class="bg-none font-raleway font-bold text-tapOrange border border-tapOrange px-5 py-1.5 rounded-xl">Deletar</button>
        </div>
    </div>
</template>