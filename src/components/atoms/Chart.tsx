export default function Chart({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-xl font-bold py-2">{title}</h3>
      {/* dummy chart area */}
      <div className="rounded-lg bg-slate-100 h-[200px] w-full"></div>
    </div>
  );
}
