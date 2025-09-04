import type { ProductProps } from "~/types/ProductProps";

export const useProductStore =  defineStore('product', () => {
    const productArray = ref<Array<ProductProps>>([]); 
    const products = computed(() => productArray)

    async function fetchProducts(shopId: number){
        if(!productArray.value?.length){
            const productsFetched = await $fetch('/api/products', {
                query: {shopId: shopId}
            });
            productArray.value = productsFetched?.products as any
        } 
    }

    const addProduct = (product: ProductProps) => productArray.value.push(product)

    function deleteProduct(productId: number){
        const productIndex = productArray.value.findIndex(product => product.id === productId)
        productArray.value.splice(productIndex, 1)
    }

    const clearProducts = () => productArray.value.length = 0

    return {
        fetchProducts,
        addProduct,
        deleteProduct,
        clearProducts,
        products
    }
});