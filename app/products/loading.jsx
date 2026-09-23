import { Skeleton } from "@/components/ui/skeleton";

function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="aspect-[4/5] w-full rounded-sm mb-[18px]" />
      <Skeleton className="h-6 w-3/4 mb-2" />
      <Skeleton className="h-4 w-1/3 mb-3" />
      <div className="flex gap-1.5">
        <Skeleton className="w-3.5 h-3.5 rounded-full" />
        <Skeleton className="w-3.5 h-3.5 rounded-full" />
        <Skeleton className="w-3.5 h-3.5 rounded-full" />
      </div>
    </div>
  );
}

export default function ProductsLoading() {
  return (
    <div className="min-h-screen" style={{ background: "var(--ivory)" }}>
      <div className="h-[72px]" />
      <div className="flex gap-10 px-[clamp(20px,4vw,60px)] py-16 max-w-screen-xl mx-auto">
        <aside className="w-56 shrink-0 space-y-6">
          <Skeleton className="h-5 w-24" />
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-full" />
            ))}
          </div>
          <Skeleton className="h-5 w-20 mt-4" />
          <div className="flex gap-2 flex-wrap">
            {Array.from({ length: 6 }).map((_, i) => (
              <Skeleton key={i} className="w-6 h-6 rounded-full" />
            ))}
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 md:gap-x-7">
            {Array.from({ length: 9 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
