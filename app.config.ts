import "ts-node/register"; // Add this to import TypeScript files
import { ExpoConfig } from "expo/config";

const config: ExpoConfig = {
  name: "star-app",
  slug: "star-app",
  plugins: ["expo-router"],
  scheme: "star-app-scheme",
};

export default config;
