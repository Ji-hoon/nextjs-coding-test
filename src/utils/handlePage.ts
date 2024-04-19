import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export function getPage(type: string, page: number) {
  if (type === "NEXT") return `/questions/${page + 1}`;
  if (type === "PREV") return `/questions/${page - 1}`;
}
