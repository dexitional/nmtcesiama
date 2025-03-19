
export default function Home() {
  return (
    <main className="">
      <section className="px-6 md:px-0 w-full border-b-2 bg-gradient-to-r from-slate-300 via-white to-slate-200">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-36 md:min-h-48 space-y-4">
          <h1 className="text-lg md:text-2xl font-satisy tracking-wider">Timeless Luxury: Unveiling the Rolex Oyster Perpetual Datejust.</h1>
          <p className="font-satisfy md:text-xl">Products &  Reviews</p>
        </div>
      </section>
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          {/* <ReviewPageCard category="Consumer Electronics" categoryImage="" categoryLink="" title="Best MacBook of 2024" content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor a sunt, non labore aperiam error quasi nisi accusamus eum." link="#" /> */}
        </div>
      </section>
        
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 md:max-w-[68rem] flex flex-col space-y-4">
          <div className="space-y-2 border-b border-black">
            <h1 className="md:text-xl font-medium flex items-center justify-between">
              <span className="">Most Recent Reviews</span>
              <button className="px-2 md:px-3 py-1 bg-black text-xs md:text-sm text-white font-semibold">More</button>
            </h1>
            {/* <p>Snag the trendiest kid-approved styles, school supplies, and more; all handpicked by your favorite creators!</p> */}
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            reviewcard
          </div>
        </div>
      </section>
     
     
    </main>
  );
}
