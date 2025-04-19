import { defineConfig, mergeConfig, type UserConfig } from 'vite';
import path from 'path';

export default defineConfig((configEnv) => {
  return mergeConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }, configEnv);
});