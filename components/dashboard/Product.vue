<script setup lang="ts">
    import { formatter } from '~/Utils/formatter';

    const { product } = defineProps(['product']);
    const emit = defineEmits(['systemUpdate', 'deleteProduct', 'updateProduct']);

    const product_visibility = ref(product.visible);

    async function productVisibility(){
        const formData = new FormData();

        formData.append('id', product.id);
        formData.append('name', 'undefined')
        formData.append('image', 'undefined')
        formData.append('description', 'undefined')
        formData.append('price', 'undefined')
        formData.append('categoryId', 'undefined')
        formData.append('visible', !product_visibility.value as any);

        try{
            const { message } = await $fetch('/api/products', {
                method: 'PUT',
                body: formData
            });
            emit('systemUpdate', {sucess: true, message});
        }catch(error: any){
            const { message } = error.data;
            emit('systemUpdate', {sucess: false, message});
        }
    }
</script>

<template>
    <div class="flex gap-4 items-center">
        <div class="w-16 h-16 rounded-xl bg-tapOrange overflow-hidden">
            <img class="w-full h-full object-cover" :src="product.image" />
        </div>
        <div>
            <p class="font-raleway font-bold">{{ product.name }}</p>
            <p class="font-raleway font-bold">{{ formatter.format(product.price) }}</p>
        </div>
        <div class="ml-auto flex flex-col justify-center items-center">
            <label class="w-8 h-4 rounded-3xl bg-neutral-500 group has-[:checked]:bg-tapOrange p-0.5 transition-all">
                <input v-model="product_visibility" @input="productVisibility" type="checkbox" class="hidden" name="visible" />
                <div class="w-3 h-full bg-white rounded-full ml-0 group-has-[:checked]:ml-4 transition-all"></div>
            </label>
            <div class="group relative">
                <div class="cursor-pointer">
                    <IconsThreeDots width="28" height="28" fill="#000" />
                </div>

                <div
                    class="group-hover:block hidden bg-neutral-100 w-32 z-50 absolute top-5 rounded-md border-2 border-neutral-200 overflow-hidden">
                    <button @click="$emit('updateProduct', product)" class="w-full flex gap-2 items-center hover:bg-neutral-200 p-2 font-raleway border-b-2 border-neutral-200">
                        <IconsPencilSquare width="16" height="16" fill="#000" />
                        Editar
                    </button>
                    <button @click="$emit('deleteProduct', product)" class="w-full flex gap-2 items-center hover:bg-neutral-200 p-2 font-raleway">
                        <IconsTrash width="16" height="16" fill="red"/>
                        Deletar
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>