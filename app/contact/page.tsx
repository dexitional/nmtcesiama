export default function Page() {
  return (
    <main className="">
      {/* Review Main Section */}
      <section className="px-6 md:px-0 w-full  border-b-2 bg-gradient-to-r from-primary/20 via-white to-primary/30">
        <div className="mx-auto md:max-w-[68rem] flex flex-col items-center justify-center min-h-32 md:h-36 space-y-4">
          <h1 className="text-xl md:text-4xl font-satisy tracking-widest text-primary">CONTACT US</h1>
          <p className="font-satisfy md:text-2xl font-bold ">Get in Touch with <span className="font-dancing">G4A</span></p>
        </div>
      </section>
        
      <section className="px-2 md:px-0 md:py-6 mb-10 w-full">
        <div className=" bg-[url('../public/contact_bg.webp')] bg-right-bottom shadow-[0px_0px_5px_#ddd_inset] rounded-xl p-4 md:px-10 md:py-10 mx-auto max-w-[68rem] h-fit flex flex-col md:flex-row">
            <div className="p-3 md:p-6 flex flex-col space-y-4 bg-primary rounded bg-opacity-20 backdrop-blur-sm">
              <div>
                <h2 className="rounded bg-primary md:bg-transparent text-base md:text-2xl text-white md:text-primary font-satisfy">Please Fill The Form For A Quick Response.</h2>
              </div>
              <form className="flex flex-col space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <label htmlFor="" className=" bg-white rounded flex-1 shadow">
                    <input className="px-6 py-3 w-full focus:outline-none placeholder:text-lg" type="text" placeholder="Name" />
                  </label>
                  <label htmlFor="" className=" bg-white rounded flex-1 shadow">
                    <input className="px-6 py-3 w-full focus:outline-none placeholder:text-lg" type="text" placeholder="Email" />
                  </label>
                </div>
                <label htmlFor="" className=" bg-white rounded flex-1 shadow">
                  <input className="px-6 py-3 w-full focus:outline-none placeholder:text-lg" name="subject" type="text" placeholder="Subject" />
                </label>
                <label htmlFor="" className=" bg-white rounded flex-1 shadow">
                  <textarea className="px-6 py-3 w-full focus:outline-none placeholder:text-lg" name="message" placeholder="Message"></textarea>
                </label>
                <button className="px-6 py-3 w-fit bg-primary/80 text-white text-lg font-medium rounded">Send Message</button>
              </form>
            </div>
            <div className={`flex-1 `}></div>
        </div>
      </section>
      
     
    </main>
  );
}
