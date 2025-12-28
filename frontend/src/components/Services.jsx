function Services(){
    return(
        <div className="bg-black min-h-screen p-8 text-center font-bold text-3xl">
  <h1 className="text-yellow-600">What We Offer</h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center text-white font-bold text-3xl mt-10">
    
    <div className="card w-[250px] shadow-2xl bg-gray-100 p-6 text-center text-black rounded-xl">
      <h2 className="font-bold text-lg">Cloud Computing</h2>
      <p className="text-sm text-gray-600 mt-4">
        Scalable and flexible cloud solutions tailored to your business needs. Leverage the power of cloud computing to enhance efficiency and drive innovation.
      </p>
    </div>

    <div className="card w-[250px] shadow-2xl bg-gray-100 p-6 text-center text-black rounded-xl">
      <h2 className="font-bold text-lg">Cyber Security</h2>
      <p className="text-sm text-gray-600 mt-4">
        Protect your digital assets with our advanced cybersecurity solutions. Stay ahead of threats with our comprehensive security services.
      </p>
    </div>

    <div className="card w-[250px] shadow-2xl bg-gray-100 p-6 text-center text-black rounded-xl">
      <h2 className="font-bold text-lg">AI & Machine Learning</h2>
      <p className="text-sm text-gray-600 mt-4">
        Leverage the power of artificial intelligence and machine learning to automate processes, gain insights, and drive innovation.
      </p>
    </div>

    <div className="card w-[250px] shadow-2xl bg-gray-100 p-6 text-center text-black rounded-xl">
      <h2 className="font-bold text-lg">Blockchain</h2>
      <p className="text-sm text-gray-600 mt-4">
        Secure and transparent decentralized solutions for your business. Implement blockchain technology to enhance trust, reduce costs, and streamline operations.
      </p>
    </div>

  </div>

  <section className="px-8 lg:px-20 py-24 bg-black">
  <h2 className="text-4xl font-bold text-white text-center">
    Our Workflow — Built Around Your Success
  </h2>
  <p className="text-white mt-4 text-center max-w-2xl mx-auto">
    We follow a transparent, collaborative and result-driven development process
    to ensure your product is delivered faster, smarter, and ready to scale.
  </p>

  
  <div className="relative border-l-4 border-indigo-600 ml-6 mt-16 space-y-16">
    {[
      {
        title: "Discovery & Requirement Analysis",
        text: "We understand your business goals, user needs, and define measurable success metrics."
      },
      {
        title: "UI/UX Wireframing & Prototyping",
        text: "We convert ideas into clickable prototypes ensuring clarity before development starts."
      },
      {
        title: "Agile Sprint Development",
        text: "Weekly releases and constant communication for full project transparency."
      },
      {
        title: "Testing, QA & Optimization",
        text: "Security, speed, cross-platform compatibility — every layer is tested thoroughly."
      },
      {
        title: "Deployment & After-Launch Support",
        text: "We deploy on AWS, Vercel, DigitalOcean and continue monitoring, scaling, and support."
      }
    ].map((step, index) => (
      <div className="ml-8" key={index}>
        <div className="absolute -left-3 mt-2 w-6 h-6 bg-indigo-600 rounded-full"></div>
        <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
        <p className="text-white mt-2 max-w-xl">{step.text}</p>
      </div>
    ))}
  </div>
</section>

<section className="px-8 lg:px-20 py-24 bg-black">
  <h2 className="text-4xl font-bold text-white text-center">
    Designed Around What Clients Care About
  </h2>
  <p className="text-white mt-4 text-center max-w-2xl mx-auto">
    Whether you're a startup launching your first MVP or an enterprise modernizing operations,
    we deliver solutions that match your vision, timeline and budget.
  </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
    {[
      {
        title: "Partnership, Not Just Service",
        text: "We treat every project like our own — strategic advice, honest timelines, real communication."
      },
      {
        title: "Faster ROI",
        text: "From automation to AI — we build tech that increases revenue, reduces cost and delivers ROI quickly."
      },
      {
        title: "Security & Scalability First",
        text: "Enterprise-grade architecture so your platform remains safe and ready to grow."
      },
      {
        title: "Data-Driven Decisions",
        text: "We track product usage, give you dashboards & analytics so every decision is backed by data."
      },
      {
        title: "Transparent Communication",
        text: "Weekly demos, sprint reports, Slack/WhatsApp updates — zero dark-zone development."
      },
      {
        title: "Post-Launch Growth Support",
        text: "We stay with you even after delivery — monitoring, scaling & feature improvements."
      }
    ].map((feature, index) => (
      <div
        key={index}
        className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition"
      >
        <h3 className="text-xl font-semibold text-yellow-600 mt-4">{feature.title}</h3>
        <p className="text-black mt-2">{feature.text}</p>
      </div>
    ))}
  </div>
</section>


</div>

    )
}
export default Services;