import type { CategoryProps } from "~/types/CategoryProps";

export const useCategoryStore = defineStore('category', () => {
    const categoriesArray = ref<Array<CategoryProps>>([]); 
    const categories = computed(() => categoriesArray)

    async function fetchCategories(shopId: number){
        if(!categoriesArray.value?.length){
            const categoriesFetched = await useFetch('/api/categories', {
                query: {shopId: shopId }
            });
            categoriesArray.value = categoriesFetched?.data.value?.categories as any
        } 
    }

    const addCategory = (category: CategoryProps) => categoriesArray.value.push(category)

    function deleteCategory(categoryId: number){
        const categoryIndex = categoriesArray.value.findIndex(category => category.id === categoryId)
        categoriesArray.value.splice(categoryIndex, 1)
    }

    const clearCategories = () => categoriesArray.value.length = 0

    return {
        fetchCategories,
        addCategory,
        deleteCategory,
        clearCategories,
        categories
    }
});