import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

export const dynamic = "force-dynamic";

const validIds = new Set(profile.links.map((link) => link.id));

// 링크 클릭 1회 기록
export async function POST(request: Request) {
  const { linkId } = await request.json().catch(() => ({}));
  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  await clicks.updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });
  return NextResponse.json({ ok: true });
}

// 링크별 클릭 수 조회
export async function GET() {
  const clicks = await getClicksCollection();
  if (!clicks) {
    return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
  }

  const docs = await clicks.find({}, { projection: { _id: 0 } }).toArray();
  const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
  return NextResponse.json(counts);
}
