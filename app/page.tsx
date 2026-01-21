import { connection } from "next/server"; // 追加
import { fetchImage } from "./lib/fetch-image"; // 追加
import { CatImage } from "./cat-image";

export default async function Home() {
  //           ^^^^^(1) asyncキーワードを追加
  // (2) ビルド時にfetchImageの結果が固定されないようにする
  console.log("page.tsx 最初");
  await connection();
  console.log("page.tsx connection後");
  // (3) APIから画像を取得
  const image = await fetchImage()
  console.log("page.tsx fetch後");

  //const image = await res.json();
  // (4) 画像URLをコンソールに表示
  console.log("Home: 画像情報を取得しました", image);
  return <CatImage url={image.url} />;
}
