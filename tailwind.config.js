/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "380px", // Extra small devices (phones, less than 640px)
        sm: "640px", // Small devices (phones, 640px and up)
        // Tailwind's default: 'sm': '640px',
        md: "768px", // Medium devices (tablets, 768px and up)
        // Tailwind's default: 'md': '768px',
        lg: "1024px", // Large devices (laptops/desktops, 1024px and up)
        // Tailwind's default: 'lg': '1024px',
        xl: "1280px", // Extra large devices (large desktops, 1280px and up)
        // Tailwind's default: 'xl': '1280px',
        "2xl": "1536px", // 2X large devices (larger desktops, 1536px and up)
        // Tailwind's default: '2xl': '1536px',
        // You can add more custom screen sizes if needed
        "3xl": "1920px", // Example: for very large screens
      },
    },
  },
  plugins: [],
};
