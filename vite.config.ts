import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'diego-react-delta-ui',
      formats: ['es', 'cjs', 'umd'],
      fileName: 'diego-react-delta-ui',
    },
    rollupOptions: {
      external: ['react', 'react dom'],
    },
  },
  plugins: [react(), dts()],
});
