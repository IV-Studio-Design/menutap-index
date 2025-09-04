export interface ShopProps {
    id: number;
    name: string;
    description: string | null;
    url_name: string;
    brand_colors: string | null;
    waiting_time: string;
    profile_pic: string;
    banner_pic: string;
    phone_number: string;
    social_media: string[];
    to_delivery: boolean | null;
    to_pickup: boolean | null;
    to_consume: boolean | null;
    show_address: boolean | null;
    userId: number;
}