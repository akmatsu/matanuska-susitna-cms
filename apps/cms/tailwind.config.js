/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
const config = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}', './admin/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors()],
};

export default config;
