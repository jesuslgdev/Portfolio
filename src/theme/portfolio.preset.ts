import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const PortfolioPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#fff4f1',
      100: '#ffe7e0',
      200: '#ffd1c6',
      300: '#ffb09e',
      400: '#ff8b6e',
      500: '#ff5a3d',
      600: '#f04428',
      700: '#c9351f',
      800: '#a62d1d',
      900: '#8a291c',
      950: '#4b110d',
    },
    colorScheme: {
      light: {
        primary: {
          color: '{primary.500}',
          contrastColor: '#ffffff',
          hoverColor: '{primary.600}',
          activeColor: '{primary.700}',
        },
        highlight: {
          background: '{primary.50}',
          focusBackground: '{primary.100}',
          color: '{primary.700}',
          focusColor: '{primary.800}',
        },
        surface: {
          0: '#ffffff',
          50: '#fffaf7',
          100: '#fff3ee',
          200: '#fde6de',
          300: '#f6d7cd',
          400: '#e9c6ba',
          500: '#cfaca1',
          600: '#a9867d',
          700: '#866761',
          800: '#664f4a',
          900: '#4f3f3b',
          950: '#2b221f',
        },
        content: {
          background: '#ffffff',
          hoverBackground: '#fff8f4',
          borderColor: '#eadfd8',
          color: '#2d241f',
          hoverColor: '#1f1916',
        },
        formField: {
          background: '#ffffff',
          disabledBackground: '#f7efea',
          filledBackground: '#fff8f4',
          filledHoverBackground: '#fff4ee',
          borderColor: '#e6d7cf',
          hoverBorderColor: '#d8c1b6',
          focusBorderColor: '{primary.400}',
          color: '#2d241f',
          placeholderColor: '#8a786f',
          borderRadius: '1.15rem',
          shadow: 'none',
        },
      },
    },
    focusRing: {
      width: '2px',
      style: 'solid',
      color: 'color-mix(in srgb, {primary.300} 80%, white 20%)',
      offset: '2px',
      shadow: 'none',
    },
  },
  components: {
    button: {
      colorScheme: {
        light: {
          outlined: {
            secondary: {
              color: '{surface.800}',
              borderColor: '{surface.600}',
              hoverBackground: '{surface.100}',
              activeBackground: '{surface.200}',
            },
          },
          text: {
            primary: {
              hoverBackground: '{primary.100}',
            },
            secondary: {
              color: '{surface.800}',
              hoverBackground: '{surface.100}',
              activeBackground: '{surface.200}',
            },
          },
        },
      },
    },
  },
});
