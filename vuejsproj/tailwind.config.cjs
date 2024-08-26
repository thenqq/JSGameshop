const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-900': '#7f1d1d',
        blue: '#1fb6ff',
        purple: '#7e5bef',
        pink: '#ff49db',
        orange: '#ff7849',
        green: '#13ce66',
        yellow: '#ffc82c',
        'gray-dark': '#273444',
        gray: '#8492a6',
        'gray-light': '#d3dce6',
        'slate-100': '#f1f5f9',
        'slate-300': '#cbd5e1',
        'slate-400': '#94a3b8',
        'slate-500': '#64748b',
        'lime-500': '#84cc16',
        'lime-600': '#65a30d',
        'lime-700': '#4d7c0f'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled']
    }
  },
  plugins: []
}
