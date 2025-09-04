<script setup lang="ts">
    const { addCategory } = useCategoryStore();

    const categoryName = ref<string>('');
    const emit = defineEmits(['systemUpdate']);

    const submit = async () => {
        try{
            const { message, categoryCreated } = await $fetch('/api/categories', {
                method: 'POST',
                body: {
                    category_name: categoryName.value
                }
            });

            addCategory(categoryCreated);

            emit('systemUpdate', {sucess: true, message});
            categoryName.value = ''
        }catch(error: any){
            const { message } = error.data;
            emit('systemUpdate', {sucess: false, message});
        }
    }
</script>

<template>
    <div>
        <h1 class="font-raleway font-bold ml-1 mb-1">Criar categoria</h1>
        <form @submit.prevent method="post" class="flex gap-2 items-center">
            <input v-model="categoryName" type="text" class="w-52 input_style" placeholder="Nome da categoria" name="categoryName" />
            <button @click="submit" type="submit" class="bg-tapOrange font-raleway font-bold text-white px-5 py-1.5 rounded-xl">Criar</button>
        </form>
    </div>
</template>