import { defineConfig } from 'vite';
import glob from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import autoprefixer from 'autoprefixer';
import postcssSortMediaQueries from 'postcss-sort-media-queries';
import path from 'path';

export default defineConfig(({ command }) => {
  return {
    root: './src',
    build: {
      outDir: '../dist', // Изменено на '../dist', чтобы выходная папка находилась на уровень выше
      emptyOutDir: true,
      sourcemap: true,
      rollupOptions: {
        input: [
          // Получаем HTML-файлы из папки 'pages' и добавляем основной файл
          ...glob.sync('./src/*.html'),
          path.resolve(__dirname, './src/index.html'), // Предполагается, что index.html находится в папке src
        ],
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          assetFileNames: (assetInfo) => {
            return assetInfo.name && assetInfo.name.endsWith('.html')
              ? '[name].[ext]'
              : 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    css: {
      postcss: {
        plugins: [
          autoprefixer(), // Префиксы для CSS
          postcssSortMediaQueries({
            sort: 'mobile-first',
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/vars.scss";`, // Убедитесь, что путь правильный
        },
      },
    },
    plugins: [
      injectHTML({
        injectData: {
          header: path.resolve(__dirname, 'src/components/header.html'),
          footer: path.resolve(__dirname, 'src/components/footer.html'),
        },
      }),
      FullReload(['./src/**/*.html', './src/**/*.scss']),
      ViteImageOptimizer({
        svg: {
          plugins: [
            'removeDoctype',
            'removeXMLProcInst',
            'minifyStyles',
            'sortAttrs',
            'sortDefsChildren',
          ],
        },
        png: {
          quality: 85,
        },
        jpeg: {
          quality: 85,
        },
        jpg: {
          quality: 85,
        },
      }),
    ],
  };
});