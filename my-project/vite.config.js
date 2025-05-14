import { defineConfig } from 'vite';  
import react from '@vitejs/plugin-react';  
import tailwindcss from '@tailwindcss/vite';  

export default defineConfig({  
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // تقسیم‌بندی فایل‌ها و جدا کردن dependency ها
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'; // همه dependencyهای node_modules در فایل جدا قرار می‌گیرند
          }
        },
        // نامگذاری فایل‌های پویا و قسمت‌های جدا شده
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        // تنظیم نام برای فایل‌های استاتیک مثل تصاویر و فونت‌ها
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|mp4|webp)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.(ttf|woff2?|eot)$/.test(name ?? '')) {
            return 'assets/fonts/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        },
      },
    },
    // افزایش هشدار در مورد فایل‌های بزرگ (در KB)
    chunkSizeWarningLimit: 1000,
  }
});