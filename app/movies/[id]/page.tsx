export default async function MovieDetail({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<Record<string, string>>;
}) {
  const id = (await params).id;
  const queryString = await searchParams;
  const qs: string[] = [];
  for (const key in queryString) {
    qs.push(`${key}: ${queryString[key]}`);
  }
  return (
    <div>
      <h1>Movie Detail {id}</h1>
      <ul>
        {qs.map((v, i) => (
          <ol key={i}>{v}</ol>
        ))}
      </ul>
    </div>
  );
}
