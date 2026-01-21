// app/api/cat/route.ts
import { NextResponse } from "next/server";
import { fetchImage } from "@/app/lib/fetch-image";

export async function GET() {
  console.log("/api/cat(外部API) 最初");
  try {
    const image = await fetchImage(); // ← lib を呼ぶだけ
    console.log("/api/cat(外部API) プロキシ後");
    return NextResponse.json(image);
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Cat API からの取得に失敗しました" },
      { status: 500 }
    );
  }
}

