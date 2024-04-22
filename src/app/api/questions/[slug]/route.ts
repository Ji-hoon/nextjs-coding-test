import { questions } from "@/src/global/questions";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  const slug = params.slug;
  const data = questions[(slug as unknown as number) - 1];

  return Response.json({ data });
}
