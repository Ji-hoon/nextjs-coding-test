import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export function getPage(type: string, params: Params) {
  const nextPage = parseInt(params.id as string);
  if (type === "NEXT") return `/questions/${nextPage + 1}`;
  if (type === "PREV") return `/questions/${nextPage - 1}`;
}
