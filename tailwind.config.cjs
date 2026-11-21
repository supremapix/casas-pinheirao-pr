/** Keep this in sync with classes used in the Vite app. */
module.exports = {
  content: ['./index.html', './App.tsx', './index.tsx', './components/**/*.{ts,tsx}', './pages/**/*.{ts,tsx}'],
        theme: {
          extend: {
            colors: {
              pinheirao: {
                green: '#0BB597',      
                deep: '#007C73',       
                black: '#1D1D20',      
                concrete: '#E5E5E5',   
                gray: '#707070',       
              }
            },
            fontFamily: {
              sans: ['Montserrat', 'sans-serif'],
              heading: ['Montserrat', 'sans-serif'],
            },
            animation: {
              'fade-in': 'fadeIn 1s ease-out',
              'fade-in-down': 'fadeInDown 0.8s ease-out',
              'fade-in-up': 'fadeInUp 0.8s ease-out',
              'slow-zoom': 'slowZoom 20s infinite alternate',
              'bounce': 'bounce 2s infinite',
              'pulse-slow': 'pulseSlow 3s ease-in-out infinite',
            },
            keyframes: {
              fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
              fadeInDown: { '0%': { opacity: 0, transform: 'translateY(-20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
              fadeInUp: { '0%': { opacity: 0, transform: 'translateY(20px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } },
              slowZoom: { '0%': { transform: 'scale(1)' }, '100%': { transform: 'scale(1.1)' } },
              pulseSlow: {
                '0%, 100%': { transform: 'scale(1)', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' },
                '50%': { transform: 'scale(1.1)', boxShadow: '0 8px 20px rgba(11, 181, 151, 0.4)' }
              },
            }
          }
        }
      };
