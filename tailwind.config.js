/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
    content: ['./*.html'],
    theme: {
        extend: {
            maxWidth: {
                desk: '1380px',
            },
            fontFamily: {
                poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
                roboto: ['"Roboto"', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#7856FF',
            },
        },
    },
    plugins: [],
};
