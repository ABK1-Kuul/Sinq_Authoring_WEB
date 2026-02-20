const GITHUB_REPO = "adaptlearning/adapt_authoring";

export interface GitHubStatsData {
  latestRelease: string | null;
  openIssues: number | null;
  contributors: { login: string; avatar_url: string; html_url: string }[];
}

const PLACEHOLDER: GitHubStatsData = {
  latestRelease: "Latest",
  openIssues: null,
  contributors: [],
};

function getAuthHeaders(): HeadersInit {
  const token = process.env.GITHUB_TOKEN;
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };
  if (token) {
    headers.Authorization = `token ${token}`;
  }
  return headers;
}

export async function getGitHubStats(): Promise<GitHubStatsData> {
  try {
    const headers = getAuthHeaders();

    const [releaseRes, repoRes, contributorsRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/repos/${GITHUB_REPO}`, {
        headers,
        next: { revalidate: 3600 },
      }),
      fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/contributors?per_page=12`,
        { headers, next: { revalidate: 3600 } }
      ),
    ]);

    const release = releaseRes.ok ? await releaseRes.json() : null;
    const repo = repoRes.ok ? await repoRes.json() : null;
    const contributors = contributorsRes.ok ? await contributorsRes.json() : [];

    return {
      latestRelease: release?.tag_name ?? PLACEHOLDER.latestRelease,
      openIssues: repo?.open_issues_count ?? null,
      contributors: Array.isArray(contributors) ? contributors : [],
    };
  } catch {
    return {
      ...PLACEHOLDER,
      openIssues: null,
      contributors: [],
    };
  }
}
