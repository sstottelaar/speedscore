module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.vue'],
  },
}
