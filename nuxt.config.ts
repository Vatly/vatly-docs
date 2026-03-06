export default defineNuxtConfig({
  extends: ['docus'],

  modules: ['@nuxtjs/sitemap'],

  site: {
    name: 'Vatly Docs',
    url: 'https://docs.vatly.com',
  },

  sitemap: {
    siteUrl: 'https://docs.vatly.com',
    sources: [
      '/api/__sitemap__/urls'
    ],
    urls: [
      '/',
      '/introduction',
      '/guides/quickstart',
      '/guides/sdks',
      '/guides/authentication',
      '/guides/pagination',
      '/guides/errors',
      '/guides/webhooks',
      '/guides/idempotency',
      '/api-reference/customers',
      '/api-reference/checkouts',
      '/api-reference/subscriptions',
      '/api-reference/subscription-plans',
      '/api-reference/orders',
      '/api-reference/refunds',
      '/api-reference/global-refunds',
      '/api-reference/chargebacks',
      '/api-reference/one-off-products',
      '/packages',
      '/packages/php/readme',
      '/packages/php/customers',
      '/packages/php/checkouts',
      '/packages/php/subscriptions',
      '/packages/php/subscriptionplans',
      '/packages/php/orders',
      '/packages/php/refunds',
      '/packages/php/oneoffproducts',
      '/packages/php/chargebacks',
      '/packages/php/webhooks',
      '/packages/laravel/readme',
      '/packages/laravel/customers',
      '/packages/laravel/checkouts',
      '/packages/laravel/subscriptions',
      '/packages/laravel/orders',
      '/packages/laravel/webhooks',
      '/integrations',
    ],
  },

  app: {
    baseURL: process.env.GITHUB_PAGES ? '/vatly-docs/' : '/',
    head: {
      titleTemplate: '%s - Vatly Docs',
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
        },
      ],
      meta: [
        { property: 'og:image', content: 'https://docs.vatly.com/og-image.jpg' },
        { property: 'og:image:width', content: '2400' },
        { property: 'og:image:height', content: '1120' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: 'https://docs.vatly.com/og-image.jpg' },
      ],
      script: [
        {
          src: 'https://cdn.usefathom.com/script.js',
          'data-site': 'OBXOIZSZ',
          defer: true,
        },
      ],
      style: [
        {
          children: `
            :root {
              --font-sans: 'Poppins', ui-sans-serif, system-ui, sans-serif;
            }
            :root, :host, .light {
              --ui-primary: #326bff;
            }
            .dark {
              --ui-primary: #5e8dff;
            }
            body {
              font-family: 'Poppins', ui-sans-serif, system-ui, sans-serif;
            }
          `,
        },
      ],
    },
  },

  css: ['~/assets/css/overrides.css'],

  mcp: {
    enabled: false,
  },

  llms: {
    enabled: false,
  },

  content: {
    build: {
      markdown: {
        highlight: {
          langs: ['bash', 'diff', 'json', 'js', 'ts', 'html', 'css', 'vue', 'shell', 'mdc', 'md', 'yaml', 'php', 'python', 'ruby'],
        },
      },
    },
  },

  nitro: {
    preset: 'github-pages',
  },

  compatibilityDate: '2025-01-01',
})
