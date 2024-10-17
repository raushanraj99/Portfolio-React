import { achievementData } from "@/Constants/Constant";
import BlurFade from "@/components/ui/blur-fade";
 
const images = Array.from({ length: 9 }, (_, i) => {
  const isLandscape = i % 2 === 0;
  const width = isLandscape ? 800 : 600;
  const height = isLandscape ? 600 : 800;
  return `https://picsum.photos/seed/${i + 1}/${width}/${height}`;
});

function Achievements() {
  return (
    <div className="min-h-[50vh]">
      <section
        id="achievement"
        className="mb-16 bg-gradient-to-b from-[#1A1F29] to-[#2A3441] py-10 px-6 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Achievements
        </h2>
        <div className="space-y-8">
          {achievementData.map((achievement, index) => (
            <div
              key={index}
              className="p-5 border-l-4 border-[#C0DB11] bg-[#2A3441] hover:bg-[#353f4f] transition-all duration-300 rounded-lg shadow-md"
            >
              <div className="flex justify-between items-center">
                <div className="text-lg font-medium text-gray-200">
                  {achievement.content}
                </div>
                <div className="ml-4 text-[#C0DB11] font-semibold">
                  {achievement.year}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* certificated details */}

      
      <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <caption className="ms-6">image</caption>
            <img
              className="mb-4 size-full rounded-lg object-contain px-6 pb-6"
              src={imageUrl}
              alt={`Random stock image ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>




    </div>
  );
}

export default Achievements;
