export default {
  ssr: false,
  target: "static",
  app: {
    head: {
      title: "Pod+ | Get started with business tools from Storipod",
      htmlAttrs: { lang: "en" },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["/assets/css/main.css"],
  tailwindcss: {
    cssPath: "@/assets/css/main.css",
  },
  axios: {
    // Axios options here
    timeout: 10000, // Example: set timeout to 10 seconds
  },
  plugins: [{ src: '~/plugins/google-analytics.client.ts', mode: 'client' }, { src: '~/plugins/googleTagManager.client.ts', mode: 'client' },]
  // buildModules: [
  //   '@nuxtjs/moment'
  // ]
  // alias: {
  // 	'@': '/'
  // },
};
