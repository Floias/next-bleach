import localFont from 'next/font/local'

const inter = localFont({
  src: [
    {
      path: '../fonts/inter-v11-latin_cyrillic-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v11-latin_cyrillic-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v11-latin_cyrillic-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v11-latin_cyrillic-700.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/inter-v11-latin_cyrillic-800.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export {inter}