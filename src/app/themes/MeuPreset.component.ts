import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MeuPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50:  '#e1f6fd',
      100: '#b6e9fa',
      200: '#8bdcf7',
      300: '#60cff5',
      400: '#35c2f2',
      500: '#2FB7F4', // Azul principal ajustado
      600: '#2793c2',
      700: '#1f6f91',
      800: '#174b60',
      900: '#0f2730',
      950: '#081218'
    },
    colorScheme: {
      light: {
        surface: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0b1120'
        }
      },
      dark: {
        surface: {
          0: '#0e1a26',
          50: '#142233',
          100: '#1a2a40',
          200: '#20314d',
          300: '#263859',
          400: '#2d4066',
          500: '#334773',
          600: '#3a4f80',
          700: '#40578d',
          800: '#466099',
          900: '#4c66a6',
          950: '#526eb3'
        }
      }
    }
  }
});

export default MeuPreset;
