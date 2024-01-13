// fontUtility.js

export const getFontStyle = (weight) => {
    switch (weight) {
      case 'medium':
        return {
          fontFamily: 'Gilroy-Medium',
          fontWeight: 500,
        };
      case 'black':
        return {
          fontFamily: 'Gilroy-Black',
          fontWeight: 900,
        };
      case 'bold':
        return {
          fontFamily: 'Gilroy-Bold',
          fontWeight: 700,
        };
      default:
        return {
          fontFamily: 'Gilroy-Regular', // Default or other fallback font
          fontWeight: 400, // Default font weight
        };
    }
  };
  