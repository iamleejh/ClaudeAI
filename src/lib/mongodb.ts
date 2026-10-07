import { MongoClient } from "mongodb";

declare global {
  // 핫 리로드·서버리스 재사용 시 연결이 중복 생성되지 않도록 전역에 보관
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// MONGODB_URI가 없으면 null을 반환해, DB 없이도 페이지는 정상 동작하게 합니다.
export async function getClicksCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  const client = await global._mongoClientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ linkId: string; count: number }>("clicks");
}
