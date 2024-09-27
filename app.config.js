import 'dotenv/config';

export default {
    expo: {
      name: "PlantIdentifier",
      slug: "PlantIdentifier",
      version: "1.0.0",
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
        adaptiveIcon: {
          foregroundImage: "./assets/adaptive-icon.png",
          backgroundColor: "#ffffff"
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
        apiUrl: process.env.API_URL,
        apiKey: process.env.API_KEY,
        eas: {
          projectId: "aa8a76bf-ec21-42a5-850e-bab3a937cb6c",
        },
      },
      updates: {
        url: "https://u.expo.dev/aa8a76bf-ec21-42a5-850e-bab3a937cb6c",
      },
      runtimeVersion: {
        policy: "appVersion",
      }
    }
}
