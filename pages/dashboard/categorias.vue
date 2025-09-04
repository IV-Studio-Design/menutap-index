<script setup lang="ts">
    import type { CategoryProps } from '~/types/CategoryProps';
    import type { SysMsgProps } from '~/types/SysMsgProps';

    useHead({
        title: "Categorias - Dashboard"
    });

    definePageMeta({
        name: "Categorias",
        middleware: ['auth'],
        layout: "dashboard"
    });

    const { user } = useUserSession();

    const { createToast } = useToastStore();
    const { categories, fetchCategories } = useCategoryStore();

    const showRename = ref<boolean>(false);
    const showDelete = ref<boolean>(false);
    const category   = ref<CategoryProps>({
        id: 0,
        name: ''
    });
    
    fetchCategories(user.value.shopId)

    const showCategoryModal = (type: string, categoryInfo: CategoryProps) => {
        if(type === "rename") showRename.value = true;
        else if(type === 'delete') showDelete.value = true;
        category.value = categoryInfo;
    }

    const systemUpdate = (e: SysMsgProps) => {
        if(e.sucess){
            createToast({
                message: e.message,
                type: "sucess"
            });
        }else{
            createToast({
                message: e.message,
                type: "error",
            });
        }
    }
</script>

<template>
    <div class="w-full mt-5">
        <DashboardCreateCategory 
            @systemUpdate="systemUpdate"
        />
       
        <div class="w-full max-w-6xl min-h-72 bg-neutral-100 p-4 mt-5 rounded-xl overflow-hidden">
            <table class="w-full">
                <thead>
                    <tr class="border-b border-black/30">
                        <th class="w-14 py-2 text-left font-raleway">#</th>
                        <th class="text-left font-raleway">Categoria</th>
                        <th class="w-14 font-raleway">Ações</th>
                    </tr>
                </thead>
            
                <tbody>
                    <tr class="border-b border-black/10 last:border-none" v-for="(category, index) in categories">
                        <td class="text-left py-2">{{ index }}</td>
                        <td class="text-left font-raleway">{{ category.name }}</td>
                        <td class="flex justify-center mt-2.5">
                            <button @click="showCategoryModal('rename', { id: category.id, name: category.name })" class="px-1">
                                <IconsPencilSquare width="20" height="20" fill="#000" />
                            </button>
                            <button @click="showCategoryModal('delete', { id: category.id, name: category.name })" class="px-1">
                                <IconsTrash width="20" height="20" fill="red"/>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <PopupContainer v-show="showRename">
            <DashboardRenameCategory
                v-show="showRename"
                :category
                @systemUpdate="systemUpdate"
                @close="showRename = false"
            />
        </PopupContainer>

        <PopupContainer v-show="showDelete">
            <DashboardDeleteCategory
                v-show="showDelete"
                :category
                @systemUpdate="systemUpdate"
                @close="showDelete = false"
            />
        </PopupContainer>

    </div>
</template>