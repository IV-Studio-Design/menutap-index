import type { ToastProps } from "~/types/ToastProps";

export const useToastStore = defineStore('toast', () => {
    const toastsArray = ref<Array<ToastProps>>([]);
    const toasts = computed(() => toastsArray);
    const id = ref<number>(0);

    function createToast(toast: ToastProps){
        id.value++

        toastsArray.value.push({
            id: id.value,
            type: toast.type,
            message: toast.message,
            time: toast.time ? toast.time : 5000
        });
    }

    function deleteToast(toastId: number){
        const toastIndex = toastsArray.value.findIndex(toast => toast.id === toastId)
        toastsArray.value.splice(toastIndex, 1)
    }

    return {
        createToast,
        deleteToast,
        toasts
    }
});