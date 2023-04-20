import { defineConfig, loadEnv } from 'vite'
import viteBaseConfig from './vite.base.config'
import viteDevConfig from './vite.dev.config'
import viteProdConfig from './vite.prod.config'

const envResolver = {
  serve: () => {
    console.log('开发环境')
    return { ...viteBaseConfig, ...viteDevConfig }
  },
  build: () => {
    console.log('生产环境')
    return { ...viteBaseConfig, ...viteProdConfig }
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  // console.log(env)
  return envResolver[command]()
})
