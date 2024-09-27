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
      },
    }
}
