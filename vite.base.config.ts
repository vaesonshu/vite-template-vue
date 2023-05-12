import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'
import checker from 'vite-plugin-checker'

import CreateHtmlPlugin from './plugins/CreateHtmlPlugin'

export default defineConfig({
  optimizeDeps: {
    entries: [], // 自定义预构建的入口文件
    include: [], // 强制预构建的依赖项 将所有不具备 ESM 格式产物包都声明一遍
    exclude: [], // 将指定数组中的依赖不进行依赖预构建
    // force: true // 是否强制依赖预构建
    // 自定义 Esbuild 行为
    esbuildOptions: {
      plugins: [
        // 加入 Esbuild 插件
      ]
    }
  },
  envPrefix: 'TEM_', // 自定义环境变量前缀 默认VITE_
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 设置别名, 以后我们在其他组件中可以使用@来代替src这个目录
    }
  },
  build: {
    rollupOptions: {
      // 配置rollup的一些构建策略
      output: {
        // 控制输出
        // 在rollup里面, hash代表将你的文件名和文件内容进行组合计算得来的结果
        assetFileNames: '[name].[hash].[ext]',
        // 分包
        manualChunks: (id: string) => {
          console.log('id', id)
          if (id.includes('node_modules')) {
            return 'vendor'
          }
        }
      }
    },
    assetsInlineLimit: 4096000, // 4000kb 小于4000kb将会打包为base64格式
    outDir: 'dist',
    assetsDir: 'static'
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    }),
    UnoCSS(),
    checker({
      vueTsc: true
    }),
    CreateHtmlPlugin({
      inject: {
        data: {
          title: '主页2222'
        }
      }
    })
  ]
})
