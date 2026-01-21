// app/lib/fetch-image.ts
import "server-only";

export type Image = {
  url: string;
};

export async function fetchImage(): Promise<Image> {
  console.log("lib/fetch-image(server only 関数) 最初");
  const apiKey = process.env.CAT_API_KEY;

  if (!apiKey) {
    console.log("VERCEL ENV:", process.env.CAT_API_KEY);
    throw new Error("環境変数 CAT_API_KEY が設定されていません");
  }

  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers: {
      "x-api-key": apiKey,
    },
    cache: "no-store",
  });
  console.log("lib/fetch-image(server only 関数) fetch後");

  if (!res.ok) {
    throw new Error("Cat API からの取得に失敗しました");
  }

  const images: Image[] = await res.json();
  return images[0];
}
