import { questions } from "@/src/global/questions";

export async function GET() {
  const data = questions.length;
  return Response.json(data);
}
