// tailwind.config.mjs
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 30px 5px rgba(135,206,250,0.5)',
          },
          '50%': {
            boxShadow: '0 0 45px 15px rgba(135,206,250,0.7)',
          },
        },
      },
    },
  },
  plugins: [],
};
