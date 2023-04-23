import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  optimizeDeps: {
    exclude: [] // 将指定数组中的依赖不进行依赖预构建
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
        assetFileNames: '[hash].[name].[ext]'
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
    UnoCSS()
  ]
})
