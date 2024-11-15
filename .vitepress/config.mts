import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Quix Labs",
    lang: 'en-US',
    description: "Organization dedicated to crafting innovative solutions in the realm of technology",

    cleanUrls: true,

    srcExclude: [
        'README.md'
    ],

    head: [
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'}],
        ['link', {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'}],
        ['link', {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'}],
        ['meta', {name: 'theme-color', content: '#47989e'}],
        ['meta', {property: 'og:type', content: 'website'}],
        ['meta', {property: 'og:locale', content: 'en'}],
        ['meta', {
            property: 'og:title',
            content: 'Quix Labs | Innovative Tech Solutions'
        }],
        ['meta', {
            property: 'twitter:title',
            content: 'Quix Labs | Innovative Tech Solutions'
        }],
        ['meta', {property: 'og:site_name', content: 'Quix Labs'}],
        ['meta', {property: 'twitter:card', content: 'summary_large_image'}],
        ['meta', {property: 'twitter:image:src', content: 'https://www.quix-labs.com/quix-labs-og.png'}],
        ['meta', {property: 'og:image', content: 'https://www.quix-labs.com/quix-labs-og.png'}],
        ['meta', {property: 'og:image:type', content: 'image/png'}],
        ['meta', {property: 'og:image:width', content: '1280'}],
        ['meta', {property: 'og:image:height', content: '640'}],
        ['meta', {property: 'og:url', content: 'https://www.quix-labs.com'}],
    ],


    sitemap: {
        hostname: 'https://thunder.quix-labs.com'
    },


    themeConfig: {
        outline: [2, 3],
        logo: '/logo.svg',
        siteTitle: "Quix Labs",

        nav: [
            {text: 'Projects', link: '/projects'},
            {text: 'Team', link: '/team'}
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/quix-labs'}
        ]
    }
})
