export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <header>헤더 (client component)</header>

      <div>콘텐츠 영역 (server + client component)</div>
      <footer>푸터 (client component)</footer>
    </main>
  );
}
