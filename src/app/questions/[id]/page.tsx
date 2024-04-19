"use server";

import Contents from "./contents";

export default async function Questions({ params }: any) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/questions/${params.id as string}`
  );
  const data = await response.json();

  const lengthResponse = await fetch(`${process.env.BASE_URL}/api/questions`);
  const length = await lengthResponse.json();

  return (
    <div className="w-full h-full flex flex-col flex-auto px-10 py-12">
      <h2 className="text-3xl font-semibold break-keep">
        Q{params.id}. {data.data.title}
      </h2>
      <Contents data={data.data} length={length} page={params.id} />
    </div>
  );
}
