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
    padding: 20,
  },
  heading: {
    fontSize: fontSizes.xxl,
    fontWeight: '600',
    color: colors.secondary,
    textAlign: 'center',
    marginTop: space.md,
    marginBottom: space.md,
  },
  logo: {
    width: 240, 
    height: 240,
    alignSelf: 'center',
    marginTop: space.md,
    marginBottom: space.md,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
    padding: 17,
    margin: 15,
    alignItems: 'center',
    borderRadius: 120,
    width: 260,
    alignSelf: 'center',
  },
  buttonTextPrimary: {
    color: colors.secondary,
    fontSize: fontSizes.md,
  },
  buttonSecondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.primary,
    padding: 17,
    margin: 15,
    alignItems: 'center',
    borderRadius: 120,
    width: 260,
    alignSelf: 'center',
  },
  buttonTextSecondary: {
    color: colors.secondary,
    fontSize: fontSizes.md,
  },
});

export { globalStyles, colors };
