const GITHUB_REPO = "ABK1-Kuul/SinqAuthoringTool";

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

export interface LatestRelease {
  downloadUrl: string;
  version: string;
  releasesPageUrl: string;
}

export async function getLatestRelease(): Promise<LatestRelease> {
  const releasesPageUrl = `https://github.com/${GITHUB_REPO}/releases/latest`;

  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
      {
        headers: getAuthHeaders(),
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return {
        downloadUrl: releasesPageUrl,
        version: "Latest",
        releasesPageUrl,
      };
    }

    const data = await res.json();
    const version = data.tag_name ?? "Latest";

    // Find Windows .exe asset
    const assets = data.assets ?? [];
    const exeAsset = assets.find(
      (a: { name: string }) =>
        a.name.endsWith(".exe") || a.name.toLowerCase().includes("win")
    );

    const downloadUrl = exeAsset?.browser_download_url ?? releasesPageUrl;

    return {
      downloadUrl,
      version,
      releasesPageUrl,
    };
  } catch {
    return {
      downloadUrl: releasesPageUrl,
      version: "Latest",
      releasesPageUrl,
    };
  }
}
