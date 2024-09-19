import { StyleSheet } from 'react-native';

const colors = {
  backgroundLight: '#557C56',
  backgroundDark: '#33372C',
  primary: '#FF885B',
  secondary: '#FFE5CF',
};

const fontSizes = {
    sm: 14,
    md: 16,
    lg: 20,
    xl: 22,
    xxl: 26,
}

const space = {
    sm: 10,
    md: 20,
    lg: 30
}

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    paddingHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'space-between'
  },
  content: {
    flex: 1,
    justifyContent: 'space-evenly',
  },
  heading: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    color: colors.secondary,
    textAlign: 'center',
  },
  infoMessage: {
    color: colors.secondary,
    fontSize: fontSizes.md,
    textAlign: 'center',
    marginVertical: space.md,
  },
  text: {
    color: colors.secondary,
    fontSize: fontSizes.md,
    textAlign: 'center',
  },
  image: {
    width: 240, 
    height: 240,
    alignSelf: 'center',
    marginTop: space.md,
    marginBottom: space.md,
  },
});

export { globalStyles, colors, fontSizes, space };
