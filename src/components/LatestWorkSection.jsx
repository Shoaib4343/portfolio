import { ArrowUpRight } from "lucide-react";

const works = [
  {
    title: "UI/ UX Design",
    img: "/Rectangle 129.png", // replace with your actual images
    bg: "bg-[#FFF6F1]",
  },
  {
    title: "Web Design",
    img: "/Rectangle 130.png",
    bg: "bg-white",
  },
  {
    title: "Landing Page",
    img: "/landing page.png",
    bg: "bg-[#FFF6F1]",
  },
];

export default function LatestWorkSection() {
  return (
    <section className="relative py-20 bg-[#FCF8F6] overflow-hidden">
      {/* Decorative blobs - optional */}
      {/* <img src="/blob1.png" alt="" className="absolute left-0 top-8 w-40 opacity-70 pointer-events-none" /> */}
      {/* <img src="/blob2.png" alt="" className="absolute right-0 bottom-0 w-56 opacity-70 pointer-events-none" /> */}
      {/* <img src="/blob3.png" alt="" className="absolute left-1/2 top-0 w-32 opacity-60 pointer-events-none" style={{ transform: "translateX(-50%)" }} /> */}

      {/* Section Title */}
      <div className="text-left mb-12 pl-2">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-black">My Latest </span>
          <span className="text-orange-500">Work</span>
        </h2>
      </div>

      {/* Cards */}
      <div className="flex justify-center gap-8 flex-wrap relative z-10">
        {works.map((work) => (
          <div key={work.title} className="relative w-[320px] flex flex-col items-center">
            {/* Main Card */}
            <div className="relative bg-orange-400 rounded-3xl shadow-xl w-full overflow-visible z-10 flex flex-col">
              {/* Header */}
              <div className="pt-8 px-8 pb-8">
                <h3 className="text-white text-2xl font-semibold">{work.title}</h3>
                <span className="block w-full h-[1px] mt-4 bg-orange-200/60 rounded-full" />
              </div>

              {/* Folder shadow effect on top only */}
              <div className="relative w-full">
                {/* Folder Layer 1 (Bottom Layer) */}
                <div className="absolute -top-6 left-10 right-10 h-10 bg-[#E0E7FF] rounded-t-2xl z-0 shadow-md" />
                {/* Folder Layer 2 (Middle Layer) */}
                <div className="absolute -top-3 left-5 right-5 h-10 bg-[#CBD5E1] rounded-t-2xl z-10 shadow" />
              </div>

              {/* Image at Bottom (flush left, right, bottom) */}
              <div className="relative z-20 mt-auto ">
                <img
                  src={work.img}
                  alt={work.title}
                  className="w-full h-54 object-none  rounded-3xl object-top"
                />
              </div>

              {/* Arrow Button */}
              <div className="mt-6 flex justify-end pr-6 pb-6 absolute top-70  right-0 z-100">
                <button className="w-14 h-14 rounded-full bg-[#232B3B] flex items-center justify-center shadow-lg hover:scale-105 transition-transform border-4 border-white">
                  <ArrowUpRight className="text-white w-7 h-7" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>





      {/* Slider Dots */}
      <div className="flex justify-center mt-16 gap-3">
        <span className="w-3 h-3 bg-[#D9D9D9] rounded-full block"></span>
        <span className="w-7 h-3 bg-[#FFA25B] rounded-full block"></span>
        <span className="w-3 h-3 bg-[#D9D9D9] rounded-full block"></span>
      </div>
    </section>
  );
}
