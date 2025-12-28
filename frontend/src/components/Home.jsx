
function Home(){
    return(
        <div className="bg-black min-h-screen p-8 ">
            <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mt-20 ">
                Scaling Businesses through <span className="text-blue-600 font-bold"> Innovative Tech Solutions</span>
            </div>
            <div className="mt-10 text-lg md:text-xl lg:text-2xl text-gray-300 text-center max-w-4xl mx-auto">
                At XYZ_Technologies, we specialize in delivering cutting-edge technology solutions that empower businesses to thrive in the digital age. Our team of experts is dedicated to transforming your vision into reality through innovative software development, robust IT infrastructure, and strategic consulting services.
            </div>  

            <div className="flex  md:gap-8 lg:gap-10 justify-center mt-8">
            <button className="mt-12 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-250 ease-in-out block mx-auto cursor-pointer">
               <a href="/Contact"> Get Started</a>
            </button>

             <button className="mt-12 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-250 ease-in-out block mx-auto cursor-pointer">
              <a href="/Services">Our Services</a>  
            </button>

            </div>

            <div className=" md:text-6xl lg:text-7xl font-bold text-white  mt-20 " >
                <div className="text-blue-600 mr-3">The XYZ STANDARD</div>

                <p className="text-2xl mt-10 text-center">Helping global brands navigate the digital landscape since 2014</p>

                <div className="text-white mt-8 text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <p>500+ clients</p>
                    <p>100+ Experts</p>
                     <p>15+ Countries</p>
                    <p>24/7 Support</p>
                      
                </div>
            </div>

            <div>
                <p className="text-white text-xl font-semibold mt-20">Core Expertise</p>
                <div className="text-white mt-8 text-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <p>Cloud Computing</p>
                    <p>Cyber Security</p>
                    <p>AI & Machine Learning</p>
                    <p>Blockchain</p>
                      
                </div>
        

            </div>

            <div className="mt-20 bg-gray-400 p-8 rounded-lg max-w-4xl mx-auto text-black ">
                <p className="font-bold text-2xl ">"Technology is best when it brings People together"</p>
                <ul className="font-semibold text-white list-disc mt-4 ml-6 text-lg ">
                    <li>Reduced costs and improved efficiency</li>
                    <li>Enterprise-grade security and scalability</li>
                </ul>


                </div>

                <div className="mt-20 bg-blue-600 p-8 rounded-lg max-w-4xl mx-auto text-white text-center ">
                <p className="text-xl font-bold text-center">Make a deal today</p>
                <p className="text-center font-semibold">100+ Companies are already growing with us</p>
                <p  className="text-center font-semibold">Are you?</p>
                <button className="mt-4 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-250 ease-in-out block mx-auto cursor-pointer">
                    <a href="/Contact">Contact Us</a>
                     </button>
                </div>

              

        </div>
    )
}
export default Home;