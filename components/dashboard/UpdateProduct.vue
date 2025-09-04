<script lang="ts" setup>
    import type { ProductProps } from '~/types/ProductProps';

    const { addProduct, deleteProduct } = useProductStore();
    const { categories } = useCategoryStore();

    const props = defineProps(['info']);
    const info = computed<ProductProps>(() => props.info);

    const emit = defineEmits(['systemUpdate', 'close']);

    const previewDisplay = useTemplateRef('preview_display');
    const imageFile = ref();

    const product = ref<ProductProps>({
        name: '',
        description: '',
        price: 0,
        image: undefined,
        visible: true,
        shopId: 0,
        categoryId: 0
    });

    watch(info, newInfo => {
        Object.getOwnPropertyNames(newInfo).forEach(item => {
            product.value[item] = newInfo[item]
        })
        if(previewDisplay.value) previewDisplay.value.src = newInfo.image;
    });

    const submit = async (e: Event) => {
        const form = e.target as HTMLFormElement
        const formData = new FormData()

        formData.append('image', imageFile.value ? imageFile.value : undefined)
        formData.append('name', isNewValue(product.value.name, info.value.name) as any)
        formData.append('description', isNewValue(product.value.description, info.value.description) as any)
        formData.append('price', isNewValue(product.value.price, info.value.price) as any)
        formData.append('categoryId', isNewValue(product.value.categoryId, info.value.categoryId) as any)

        // const data = {
        //     id: info.value.id,
        //     name: isNewValue(product.value.name, info.value.name),
        //     description: isNewValue(product.value.description, info.value.description),
        //     price: isNewValue(product.value.price, info.value.price),
        //     image: imageFile.value,
        //     categoryId: isNewValue(product.value.categoryId, info.value.categoryId)
        // }

        try{
            const { message, productUpdated } = await $fetch(`/api/products/${info.value.id}`, {
                method: 'PUT',
                body: formData
            });

            deleteProduct(productUpdated.id)

            // @ts-expect-error
            delete productUpdated.category

            addProduct(productUpdated)

            emit('systemUpdate', {sucess: true, message});
            closeModal()
        }catch(error: any){
            const { message } = error.data;
            emit('systemUpdate', {sucess: false, message});
            closeModal()
        }
    }
    
    const closeModal = () => {
        imageFile.value = undefined
        emit('close');
    }

    function previewImage(e: Event){
        const input = e.target as HTMLInputElement
        
        if(previewDisplay.value){
            previewDisplay.value.src = URL.createObjectURL(input.files![0]);
            imageFile.value = input.files![0]
        }
    }
</script>

<template>
    <div class="w-full max-w-2xl bg-tapModalGray rounded-3xl shadow-md px-12 py-7 relative">
        <button @click="closeModal" class="absolute top-5 right-5"><IconsClose width="24" height="24" fill="red" /></button>
        <div>
            <form @submit.prevent="submit" method="post" enctype="multipart/form-data">
                <div class="space-y-3">
                    <div class="w-44 flex justify-between items-center">
                        <p class="font-raleway font-semibold">Foto do Produto</p>
                        <div class="mt-1">
                            <IconsInfoCircleOutline width="16" height="16" />
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <label class="flex flex-col cursor-pointer">
                            <div class="w-44 h-48 flex justify-center items-center bg-zinc-100 border border-neutral-300 rounded-xl relative overflow-hidden">
                                <img v-show="imageFile || product.image" ref="preview_display" class="w-full h-full absolute object-cover" src="" />
                                <IconsAdd width="72" height="72" stroke="#e5e5e5"/>
                            </div>
                            <input class="hidden" @input="previewImage" type="file" name="product_image" />
                        </label>

                        <div class="w-full space-y-9">
                            <label class="group w-full font-raleway flex flex-col relative">
                                <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-2 left-16 text-red-300 text-3xl">*</span>
                                <input v-model="product.name" type="text" class="input_style" placeholder="Nome" name="product_name" />
                            </label>

                            <label class="group w-full font-raleway flex flex-col relative -translate-y-3">
                                <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-1.5 left-[5.5rem] text-red-300 text-3xl">*</span>
                                <textarea v-model="product.description" class="h-32 input_style" placeholder="Descrição" name="product_description"></textarea>
                            </label>
                        </div>
                    </div>

                    <div class="w-full flex gap-5 justify-start items-center">
                        <label class="group relative">
                            <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-1.5 left-11 text-red-300 text-lg">*</span>
                            <input v-model="product.price" type="number" class="w-44 input_style" min="0" placeholder="R$" name="product_price" /> 
                        </label>

                        <label class="w-full font-raleway flex flex-col">
                            <select v-model="product.categoryId" name="product_category" class="text-neutral-400 input_style appearance-none bg-[url('@/assets/images/icons/chevron-down.svg')] bg-[center_right_1.25rem] bg-no-repeat">
                                <option value="">Escolha uma Categoria *</option>
                                <option v-for="category in categories" 
                                    :value="category.id"
                                    >
                                        {{ category.name }}
                                </option>
                            </select>
                        </label>
                    </div>
                    
                </div>
                
                <div class="space-x-5 mt-5">
                    <button type="submit" class="bg-tapOrange font-raleway font-bold text-white px-5 py-1.5 rounded-xl">Atualizar</button>
                    <button @click="closeModal" type="button" class="bg-none font-raleway font-bold text-tapOrange border border-tapOrange px-5 py-1.5 rounded-xl">Cancelar</button>
                </div>
                
            </form>
        </div>
    </div>
</template>

<style scoped>
    input[type=number]::-webkit-outer-spin-button,
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
</style>