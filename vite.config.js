import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // Оптимизация для шрифтов
  assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.otf'], // Добавьте другие форматы, если нужно
  build: {
    assetsInlineLimit: 4096, // Файлы меньше 4kb будут встроены в код, шрифты обычно больше
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (/\.(woff2?|eot|ttf|otf)$/.test(assetInfo.name)) {
            return 'fonts/[name].[hash][extname]' // Шрифты в отдельную папку
          }
          return 'assets/[name].[hash][extname]'
        }
      }
    }
  }
})