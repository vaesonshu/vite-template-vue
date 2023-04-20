/// <reference types="vite/client" />
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 声明自定义环境变量类型 便于更好的类型提示
interface ImportMetaEnv {
  readonly TEM_URL: string
  readonly TEM_ENV: string
  readonly TEM_PORT: string
}
