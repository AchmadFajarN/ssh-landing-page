const Product = () => {
  return (
    <section className="p-section h-[100vh]">
        <div className="w-full min-h-full pt-4 border rounded-[20px] bg-black/90 text-white">
            <h1 className="text-2xl font-raleway uppercase font-bold flex px-8 py-4">Our Product <span className="font-poppins text-sm">(3)</span></h1>
            <div className="mt-4 border-y border-white/40 py-8 px-8">
              <p className="uppercase font-raleway text-xl flex gap-2"><span className="font-poppins text-sm">(1)</span>Creative</p>
            </div>
            <div className="border-b border-white/40 py-8 px-8">
              <p className="uppercase font-raleway text-xl flex gap-2"><span className="font-poppins text-sm">(2)</span>Productive</p>
            </div>
        </div>
    </section>
  )
}

export default Product