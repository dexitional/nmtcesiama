export default function Home() {
  return (
    <main className="">
      {/* Review Main Section */}
      <section className="px-6 md:px-0 w-full  border-b-2 bg-gradient-to-r from-primary/20 via-white to-primary/30">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-32 md:h-36 space-y-4">
          <h1 className="text-xl md:text-4xl font-satisy tracking-widest text-primary">IMPACT & STORIES</h1>
          <p className="font-satisfy md:text-2xl font-bold">Transformational changes by G4A </p>
        </div>
      </section>
        
      <section className="px-6 md:px-0 mb-10 w-full">
        <div className="mx-auto py-10 max-w-[68rem] flex flex-col space-y-4">
         <div className="w-full grid grid-cols-1 md:grid-cols-4 md:gap-x-6 gap-y-10">
            reviewcard
         </div>
        </div>
      </section>
      
     
    </main>
  );
}
