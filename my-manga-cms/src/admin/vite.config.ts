import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// If you're using a base config extension
export default defineConfig((configEnv) => {
  return mergeConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      tailwindcss(),
    ],
  }, configEnv);
});