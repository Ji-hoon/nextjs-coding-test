"use server";

import Contents from "./contents";

export default async function Questions({ params }: any) {
  const response = await fetch(
    `${process.env.BASE_URL}/api/questions/${params.id as string}`,
    { next: { revalidate: 10 } }
  );
  const data = await response.json();

  const lengthResponse = await fetch(`${process.env.BASE_URL}/api/questions`, {
    next: { revalidate: 10 },
  });
  const length = await lengthResponse.json();

  return (
    <div className="page-container">
      <h2 className="heading-2">
        Q{params.id}. {data.data.title}
      </h2>
      <Contents data={data.data} length={length} page={params.id} />
    </div>
  );
}
