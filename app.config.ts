import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "star-app",
  slug: "star-app",
  plugins: ["expo-router"],
  scheme: "yandevstarapp",
  android: {
    package: "com.yandev.starapp",
  },
  ios: {
    bundleIdentifier: "com.yandev.starapp",
  },
  extra: {
    eas: {
      projectId: "com.yandev.starapp",
    },
  },
};

export default config;
