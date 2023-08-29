import {nextui} from "@nextui-org/react";
export default {
    content: [
        "./src/app/**/*.{tsx,ts,jsx,js}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {},
    },
    darkMode: "class",
    plugins: [nextui()]
}