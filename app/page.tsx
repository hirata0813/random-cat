import { connection } from "next/server"; // 追加
import { fetchImage } from "./fetch-image"; // 追加
import { CatImage } from "./cat-image";
 
export default async function Home() {
  //           ^^^^^(1) asyncキーワードを追加
  // (2) ビルド時にfetchImageの結果が固定されないようにする
  await connection();
  // (3) APIから画像を取得
  const image = await fetchImage();
  // (4) 画像URLをコンソールに表示
  console.log("Home: 画像情報を取得しました", image);
  return <CatImage url={image.url} />;
}
