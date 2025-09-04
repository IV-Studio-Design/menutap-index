<script setup lang="ts">
    const { deleteCategory, addCategory } = useCategoryStore();

    const { category } = defineProps(['category']);

    const emit = defineEmits(['systemUpdate', 'close']);
    const newCategoryName = ref<string>('');

    const submit = async () => {
        try {
            const { message, categoryUpdated } = await $fetch('/api/categories', {
                method: 'PUT',
                body: {
                    category_id: category.id,
                    category_name: newCategoryName.value
                }
            });

            deleteCategory(categoryUpdated.id),
            addCategory(categoryUpdated)

            emit('systemUpdate', {sucess: true, message});
            newCategoryName.value = ''
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
        <p class="font-raleway font-bold text-xl text-tapOrange">Renomear categoria</p>
        <p class="font-raleway text-sm">Nome atual: <span class="font-light">{{ category.name }}</span></p>

        <form @submit.prevent method="post">
            <input v-model="newCategoryName" type="text" class="w-full my-5 input_style" name="newCategoryName" placeholder="Novo nome" />

            <div class="space-x-5">
                <button @click="submit" type="submit" class="bg-tapOrange font-raleway font-bold text-white px-5 py-1.5 rounded-xl">Renomear</button>
                <button @click="$emit('close')" type="button" class="bg-none font-raleway font-bold text-tapOrange border border-tapOrange px-5 py-1.5 rounded-xl">Cancelar</button>
            </div>
        </form>
    </div>
</template>