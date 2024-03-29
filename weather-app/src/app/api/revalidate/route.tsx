import {NextRequest, NextResponse} from "next/server";
import {revalidateTag} from "next/cache";

export async function GET(req: NextRequest) {
  const tag = req.nextUrl.searchParams.get('tag')
  if (!tag) throw new Error('태그는 필수입니다.')

  revalidateTag(tag)
  return NextResponse.json({ message: '재검증에 성공하였습니다', tag})
}