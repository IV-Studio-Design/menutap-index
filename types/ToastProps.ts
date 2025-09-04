
type toastTypes = "sucess" | "error" | "alert";

export interface ToastProps {
    id?: number;
    type: toastTypes;
    message: string;
    time?: number;
}