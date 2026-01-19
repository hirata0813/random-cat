"use server";

type Image = {
  url: string;
};

export async function fetchImage(): Promise<Image> {
  if (!process.env.CAT_API_KEY) {
    throw new Error("環境変数 CAT_API_KEY が設定されていません");
  }
  //console.log("CAT_API_KEYを読み込んだよ");

  const CAT_API_KEY = process.env.CAT_API_KEY;
  const res = await fetch("https://api.thecatapi.com/v1/images/search", {
    headers: { "x-api-key": CAT_API_KEY }, // 追加
  });
  const images = await res.json();
  console.log("fetchImage: 画像情報を取得しました", images);
  return images[0];
}
