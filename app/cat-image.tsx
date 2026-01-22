"use client"; // (1) use clientを指定

import { useState } from "react"; // 追加
import { fetchImage } from "./fetch-image";
import styles from "./page.module.css";

type CatImageProps = {
  url: string;
};

export function CatImage({ url }: CatImageProps) {
  console.log("cat-image(クライアントサイド) 最初");
  // (2) useStateを使って状態を管理
  const [imageUrl, setImageUrl] = useState(url);

  // (3) 画像を取得する関数を定義
  const refreshImage = async () => {
    setImageUrl(""); // 初期化
    const res = await fetch("/api/cat"); // API経由で取得
    const image = await res.json(); // response オブジェクトは，サーバ内で.json()していても，HTTPを経由すると文字列になるので，クライアント側でも.json()が必要
    setImageUrl(image.url);
  };

  return (
    <div className={styles.page}>
      <button onClick={refreshImage} className={styles.button}>
        他のにゃんこも見る
      </button>
      <div className={styles.frame}>
        {imageUrl && <img src={imageUrl} className={styles.img} />}
      </div>
    </div>
  );
}
