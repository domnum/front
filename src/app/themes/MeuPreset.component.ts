import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const MeuPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e0f2ff',
      100: '#b3d8ff',
      200: '#80bfff',
      300: '#4da6ff',
      400: '#2694ff',
      500: '#0080ff',     
      600: '#0066cc',
      700: '#004d99',
      800: '#003366',
      900: '#001a33',
      950: '#000d1a'
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
