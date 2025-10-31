<script setup lang="ts">
    import type { SysMsgProps } from '~/types/SysMsgProps';

    useHead({
        title: "Produtos - Dashboard"
    });

    definePageMeta({
        name: "Produtos",
        middleware: ['auth'],
        layout: "dashboard"
    });

    const { user } = useUserSession();

    const { createToast } = useToastStore();
    const { categories, fetchCategories } = useCategoryStore()
    const { products, fetchProducts } = useProductStore();

    const showCreateProduct = ref<boolean>(false);
    const showUpdateProduct = ref<boolean>(false);
    const showDeleteProduct = ref<boolean>(false);
    const productInfo = ref();

    fetchCategories(user.value!.shopId)
    fetchProducts(user.value!.shopId)

    const systemUpdate = (e: SysMsgProps) => {
        if(e.sucess){
            createToast({
                message: e.message,
                type: "sucess"
            });
        }else{
            createToast({
                message: e.message,
                type: "error"
            });
        }
    };

    const showProductModal = (type: string, info: any) => {
        if(type === "update") showUpdateProduct.value = true;
        else if(type === 'delete') showDeleteProduct.value = true;
        productInfo.value = info;
    }
</script>

<template>
    <div class="w-full">
        <div class="w-full flex flex-col gap-5 justify-start items-start my-7">
            <button @click="showCreateProduct = true" class="flex gap-2 items-center text-white font-raleway font-bold bg-tapOrange hover:bg-orange-500 transition-all px-3 py-1 rounded-lg">
                <IconsAdd width="20" height="20" stroke="#fff" />
                Novo Produto
            </button>
            <label class="w-full bg-zinc-100 flex items-center has-[:focus]:outline outline-tapOrange border-2 border-neutral-300 pl-3 py-1 rounded-lg">
                <IconsSearch width="16" height="16" fill="#d4d4d4" />
                <input class="w-full bg-transparent outline-none font-raleway pl-2 placeholder:text-sm placeholder:text-neutral-400" type="text" name="search-product" placeholder="Sex On The Beach" />
            </label>
        </div>

        <div class="w-full flex flex-col gap-5">
            <DashboardAccordion
                v-for="(category, index) in categories"
                :key="category.id"
                :title="category.name"
                :open="index == 0"
            >
                <div class="w-full grid gap-y-5 gap-x-16 place-content-between grid-cols-3">
                    <DashboardProduct
                        v-for="product in products?.filter(p => p.categoryId === category.id)" 
                        :key="product.id"
                        :product
                        @systemUpdate="systemUpdate"
                        @updateProduct="(info: SysMsgProps) => showProductModal('update', info)"
                        @deleteProduct="(info: SysMsgProps) => showProductModal('delete', info)"
                    />
                </div>    
            </DashboardAccordion>
        </div>

        <PopupContainer v-show="showCreateProduct">
            <DashboardCreateProduct
                @systemUpdate="systemUpdate"
                @close="showCreateProduct = false"
            />
        </PopupContainer>

        <PopupContainer v-show="showUpdateProduct">
            <DashboardUpdateProduct
                :info="productInfo"
                @systemUpdate="systemUpdate"
                @close="showUpdateProduct = false"
            />
        </PopupContainer>

        <PopupContainer v-show="showDeleteProduct">
            <DashboardDeleteProduct
                :productInfo="productInfo"
                @systemUpdate="systemUpdate"
                @close="showDeleteProduct = false"
            />
        </PopupContainer>
        
    </div>
</template>