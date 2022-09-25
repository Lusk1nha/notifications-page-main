import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
   sm: '360px',
   md: '700px',
   lg: '960px'
};

const fonts = {
   body: 'Plus Jakarta Sans, sans-serif',
   heading: 'Plus Jakarta Sans, sans-serif'
};

const colors = {
   white: 'hsl(0, 0%, 100%)',
   red: 'hsl(1, 90%, 64%)',
   strongBlue: 'hsl(219, 85%, 26%)',
   blackFont: 'hsl(224, 21%, 14%)',
   textFont: 'hsl(219, 12%, 42%)'
};

const fontSizes = {
   xs: '0.875rem',
   sm: '1rem',
   md: '1.25rem',
   lg: '1.5rem'
};

const fontWeights = {
   normal: 400,
   extrabold: 800
};

const theme = extendTheme({
   breakpoints,
   fonts,
   colors,
   fontSizes,
   fontWeights
});

export default theme