function About(){
    return(
       <div className="bg-black min-h-screen p-8 ">
        <h1 className="text-white text-center font-bold text-3xl">ABOUT US</h1>
        <div className="mt-10 bg-blue-600 p-8 rounded-lg max-w-4xl mx-auto text-black font-bold text-center px-6 py-3 text-xl">
            XYZ Technologies was founded with a vision — making world-class engineering accessible to every business. Our culture blends design thinking with technical excellence.
        </div>

         <h1 className="text-white text-center font-bold text-3xl mt-15">OUR VISION</h1>
        <div className="mt-10 bg-blue-600 p-8 rounded-lg max-w-4xl mx-auto text-black font-bold text-center px-6 py-3 text-xl">
           <p>Create globally trusted technology that empowers millions.</p>
           <p className="mt-2">We are a team of passionate engineers and designers committed to innovation and excellence.</p>
           <p className="mt-2"> Our mission is to build solutions that drive real impact and create lasting value for our clients and communities.</p>
        </div>

        <h1 className="text-white  text-center font-bold text-3xl mt-15">OUR CORE MEMBERS</h1>
        <div className="flex gap-6 justify-center min-h-screen mt-10">
            
            <div className="card w-[200px] h-[200px] shadow-2xl bg-gray-100 p-6 text-center rounded-2xl">
                 <h2 className="font-bold text-lg">Mr. Abc Z</h2>
                 <p className="text-sm text-gray-600 mt-20">Co-Founder of XYZ Tech</p>
                 <p className="text-xs text-gray-500 mt-2">Started in 2025</p>
            </div>

             <div className="card w-[200px] h-[200px] shadow-2xl bg-gray-100 p-6 text-center rounded-2xl">
                <h2 className="font-bold text-lg">Mr. Abc Z</h2>
                 <p className="text-sm text-gray-600 mt-20">CEO of XYZ Tech</p>
                 <p className="text-xs text-gray-500 mt-2">Started in 2025</p>
            </div>
        </div>
       </div>
    )
}
export default About;