import 'dotenv/config';

export default {
    expo: {
      name: "PlantIdentifier",
      slug: "PlantIdentifier",
      version: "1.0.0",
      owner: "emlznv",
      orientation: "portrait",
      icon: "./assets/icon.png",
      userInterfaceStyle: "light",
      splash: {
        image: "./assets/splash.png",
        resizeMode: "contain",
        backgroundColor: "#ffffff"
      },
      ios: {
        supportsTablet: true
      },
      android: {
        package: "com.emlznv.plantidentifier",
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff"
        },
        runtimeVersion: {
          policy: "appVersion"
        }
      },
      web: {
        favicon: "./assets/favicon.png"
      },
      plugins: [
        [
          "expo-camera",
          {
            cameraPermission: "Allow $(PRODUCT_NAME) to access your camera"
          }
        ]
      ],
      extra: {
        apiUrl: process.env.EXPO_PUBLIC_API_URL,
        apiKey: process.env.EXPO_PUBLIC_API_KEY,
        eas: {
          projectId: "08307045-fba1-4a53-9b3c-47d9e35143d4",
        }
      },
      updates: {
        url: "https://u.expo.dev/08307045-fba1-4a53-9b3c-47d9e35143d4"
      },
    }
}
