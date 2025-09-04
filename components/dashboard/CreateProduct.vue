<script lang="ts" setup>
    const { addProduct } = useProductStore();
    const { categories } = useCategoryStore();
    
    const emit = defineEmits(['systemUpdate', 'close']);

    const previewDisplay = useTemplateRef('preview_display');
    const imageFile = ref()
    
    async function submit(e: Event){
        const form = e.target as HTMLFormElement 
        const formData = new FormData(e.target as HTMLFormElement)
       
        try{
            const { message, productCreated } = await $fetch('/api/products', {
                method: 'POST',
                body: formData
            });

            addProduct(productCreated)

            emit('systemUpdate', {sucess: true, message});
            closeModal();
            form.reset();
        }catch(error: any){
            console.log(error)
            const { message } = error.data;
            emit('systemUpdate', {sucess: false, message});
        }
    }

    const closeModal = () => {
        emit('close')
        if(previewDisplay.value){
            previewDisplay.value.src = ''
            imageFile.value = null
        }
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
                        <p>Foto do produto</p>
                        <div class="mt-1">
                            <IconsInfoCircleOutline width="16" height="16" />
                        </div>
                    </div>
                    <div class="flex gap-5">
                        <label class="flex flex-col cursor-pointer">
                            <div class="w-44 h-48 flex justify-center items-center bg-zinc-100 border border-neutral-300 rounded-xl relative overflow-hidden">
                                <img ref="preview_display" v-show="imageFile" class="w-full h-full absolute object-cover" src="" />
                                <IconsAdd width="72" height="72" stroke="#e5e5e5"/>
                            </div>
                            <input class="hidden" @input="previewImage" type="file" name="image" />
                        </label>

                        <div class="w-full space-y-9">
                            <label class="group w-full font-raleway flex flex-col relative">
                                <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-2 left-16 text-red-300 text-3xl">*</span>
                                <input type="text" class="input_style" placeholder="Nome" name="name" />
                            </label>

                            <label class="group w-full font-raleway flex flex-col relative -translate-y-3">
                                <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-1.5 left-[5.5rem] text-red-300 text-3xl">*</span>
                                <textarea class="h-32 input_style" placeholder="Descrição" name="description"></textarea>
                            </label>
                        </div>
                    </div>

                    <div class="w-full flex gap-5 justify-start items-center">
                        <label class="group relative">
                            <span class="group-has-[:placeholder-shown]:block hidden select-none absolute top-1.5 left-11 text-red-300 text-lg">*</span>
                            <input type="number" class="w-44 input_style" min="0" placeholder="R$" name="price" /> 
                        </label>

                        <label class="w-full font-raleway flex flex-col">
                            <select name="categoryId" class="text-neutral-400 input_style appearance-none bg-[url('@/assets/images/icons/chevron-down.svg')] bg-[center_right_1.25rem] bg-no-repeat">
                                <option value="0">Escolha uma Categoria *</option>
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
                    <button type="submit" class="bg-tapOrange font-raleway font-bold text-white px-5 py-1.5 rounded-xl">Criar</button>
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