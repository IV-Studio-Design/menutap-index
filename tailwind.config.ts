import type { Config } from 'tailwindcss';

export default<Partial<Config>> {
    theme: {
        extend: {
            colors: {
                tapOrange: "#F5831E",
                tapOrangeLight: "#F8A931",
                tapGray: "#F5F5F5",
                tapModalGray: '#f9f9f9'
            },
            fontFamily: {
                raleway: ['Raleway', 'sans-serif']
            }
        }
    }
}