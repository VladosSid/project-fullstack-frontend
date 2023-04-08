export const theme = {
  device: {
    mobail: 'screen and (min-width: 375px)',
    tablet: 'screen and (min-width: 768px)',
    desktop: 'screen and (min-width: 1240px)',
  },

  // ${props => props.theme.color.footer.bavkgroundFooter}

  dark: {
    color: {
      primary: '#22252A',
      secondary: '#8BAA36',

      // background
      // backgrounGlobal: '#2A2C36',
      backgrounGlobal: '#1E1F28',

      header: {
        backgroun: '#1E1F28',
        textNavigation: '#FAFAFA',
        SearchImg: '#FAFAFA',
      },

      mainPageTitle: {
        colorTitle: '#FAFAFA',
      },

      shoppingList: {
        colorImageContainer: '#2A2C36',
        borderItemContainer: 'rgba(250, 250, 250, 0.3)',
        titleProduct: '#FAFAFA',
        strokeRemoveSvg: '#FAFAFA',
        ImgIngradientsText: ' #FAFAFA',
      },

      footer: {
        bavkgroundFooter: '#8BAA36',
      },
    },
  },

  white: {
    color: {
      primary: '#8BAA36',
      secondary: '#22252A',

      // background
      backgrounGlobal: '#FFFFFF',

      // header: {
      //   textAndLogo: '#23262A',

      //   // User Profaile
      //   background: '#FAFAFA',
      //   borderInputTextLogo: '#23262A',
      // },
      header: {
        backgroun: '#FAFAFA',
        textNavigation: '#23262A',
        SearchImg: '#22252A',
      },

      mainPageTitle: {
        colorTitle: '#001833',
      },

      shoppingList: {
        colorImageContainer: '#EBF3D4',
        borderItemContainer: '#e0e0e0',
        titleProduct: '#3e4462',
        strokeRemoveSvg: '#333333',
      },
      footer: {
        bavkgroundFooter: '#22252A',
      },

      //  text
    },
  },
};

export default theme;
