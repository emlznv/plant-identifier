## Overview 
This React Native app, built with Expo, allows users to scan or upload images of plants using an image recognition API and keeps a history of the most recently scanned items.

## Run Locally using Expo Go

1. Clone the project

```bash
  git clone https://github.com/emlznv/plant-identifier.git
```

2. Install Expo CLI
```bash
  npm install -g expo-cli
```

3. Go to the project directory

```bash
  cd PlantIdentifier
```

4. Install dependencies

```bash
  npm install
```
5. Copy the `.env.example` file content into a new `.env.local` file 

6. Create a free API key at [Pl@ntNet API](https://my.plantnet.org/doc/openapi)

7. Copy and paste the generated API key to `EXPO_PUBLIC_API_KEY` in the `.env.local` file

8. Run the project
```bash
  npx expo start
```

9. Open the Expo Go app on your mobile device and scan the generated QR code
