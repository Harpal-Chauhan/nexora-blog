const Loading = () => {
  return (
    <main className="min-h-screen bg-[#f5f5f3] text-[#111111]">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">

        {/* Navbar skeleton */}
        <div className="flex items-center justify-between border-b border-black/10 pb-5">
          <div className="h-7 w-28 animate-pulse rounded bg-black/10" />

          <div className="hidden gap-6 md:flex">
            <div className="h-4 w-12 animate-pulse rounded bg-black/10" />
            <div className="h-4 w-16 animate-pulse rounded bg-black/10" />
            <div className="h-4 w-14 animate-pulse rounded bg-black/10" />
          </div>

          <div className="h-9 w-20 animate-pulse rounded-full bg-black/10" />
        </div>

        {/* Hero skeleton */}
        <section className="pt-20">
          <div className="h-3 w-40 animate-pulse rounded bg-black/10" />

          <div className="mt-6 h-20 max-w-3xl animate-pulse rounded-2xl bg-black/10" />

          <div className="mt-6 h-5 w-full max-w-xl animate-pulse rounded bg-black/10" />
          <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-black/10" />
        </section>

        {/* Cards skeleton */}
        <section className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item}>
              <div className="aspect-[16/10] animate-pulse rounded-[1.5rem] bg-black/10" />

              <div className="mt-5 h-3 w-20 animate-pulse rounded bg-black/10" />

              <div className="mt-4 h-7 w-4/5 animate-pulse rounded bg-black/10" />

              <div className="mt-3 h-4 w-full animate-pulse rounded bg-black/10" />
              <div className="mt-2 h-4 w-3/4 animate-pulse rounded bg-black/10" />
            </div>
          ))}
        </section>

      </div>
    </main>
  );
}

export default Loading