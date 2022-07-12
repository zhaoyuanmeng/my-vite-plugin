import type { PluginOption } from "vite";
export default function vitePluginTemplate(): PluginOption {
  return {
    // 插件名称
    name: "vite-plugin-template",

    // pre 会较于 post 先执行
    enforce: "pre", // post

    // 指明它们仅在 'build' 或 'serve' 模式时调用
    apply: "build", // apply 亦可以是一个函数
    // 含义: 转换钩子,接收每个传入请求模块的内容和文件路径
    // 应用: 在这个钩子对SFC模版进行解析并注入自定义属性
    transform(code, id) {},
    config(config, { command }) {
      console.log("这里是config钩子");
    },
    configResolved(resolvedConfig) {
      console.log("这里是configResolved钩子");
    },
    // 含义: 配置开发服务器钩子,可以添加自定义中间件
    // 应用: 在这个钩子实现Open Editor调用服务
    configureServer(server) {
      console.log("这里是configureServer钩子");
    },
    // 含义: 转换index.html的专用钩子,接收当前HTML字符串和转换上下文
    // 应用: 在这个钩子注入交互功能
    transformIndexHtml(html) {
      console.log("这里是transformIndexHtml钩子");
    },
  };
}
