const ROOT_URL =
  process.env.NEXT_PUBLIC_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://localhost:3000');

/**
 * MiniApp configuration object. Must follow the Farcaster MiniApp specification.
 *
 * @see {@link https://miniapps.farcaster.xyz/docs/guides/publishing}
 */
export const minikitConfig = {
 export const minikitConfig = {
    accountAssociation: {
      {
  "accountAssociation": {
    "header": "eyJmaWQiOjExMTIzMTksInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHg0MjBiMzgzZmFBN0ZGNTFFODNCYjUzZkJERTVkYUMzZjBkMWJhOUIyIn0",
    "payload": "eyJkb21haW4iOiJteS1uaW5lLW9tZWdhLnZlcmNlbC5hcHAifQ",
    "signature": "rH3AZVknEJq68WZ6ZWOGab13lMmY61l+zH7ae8nwSYEW04fO9jdwvdzI4kfgwZvpAd92pn5AAMGicEj3z25Xexs="
 
    },
    miniapp: {
        ...
    },
  }
    version: "1",
    name: "Cubey", 
    subtitle: "Your AI Ad Companion", 
    description: "Ads",
    screenshotUrls: [`${ROOT_URL}/screenshot-portrait.png`],
    iconUrl: `${ROOT_URL}/blue-icon.png`,
    splashImageUrl: `${ROOT_URL}/blue-hero.png`,
    splashBackgroundColor: "#000000",
    homeUrl: ROOT_URL,
    webhookUrl: `${ROOT_URL}/api/webhook`,
    primaryCategory: "social",
    tags: ["marketing", "ads", "quickstart", "waitlist"],
    heroImageUrl: `${ROOT_URL}/blue-hero.png`, 
    tagline: "",
    ogTitle: "",
    ogDescription: "",
    ogImageUrl: `${ROOT_URL}/blue-hero.png`,
  },
} as const;

