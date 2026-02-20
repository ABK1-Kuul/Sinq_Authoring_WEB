import { getGitHubStats } from "@/lib/github";
import { ContributeClient } from "./ContributeClient";

export default async function ContributePage() {
  const githubStats = await getGitHubStats();

  return <ContributeClient githubStats={githubStats} />;
}
