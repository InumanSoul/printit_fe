export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex gap-2 items-center p-5 border rounded-xl">
        <p>Status</p>
        <div className="px-3 py-2 bg-green-500 text-white rounded-full">
          Running
        </div>
      </div>
    </main>
  );
}
