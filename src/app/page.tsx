import { getLatestRelease } from "@/lib/releases";
import { LandingClient } from "./LandingClient";

export default async function HomePage() {
  const { downloadUrl, version } = await getLatestRelease();

  return <LandingClient downloadUrl={downloadUrl} version={version} />;
}
