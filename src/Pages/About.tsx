import resume from "@/assets/Raushan_raj.pdf";

function About() {
  return (
    <div className="min-h-[50vh]">
      <div className="flex flex-col justify-center align-middle items-center ">
        <h1 className="text-xl my-10 font-bold text-[#accf2d]">Resume </h1>
        <iframe src={resume} className="h-[770px] w-[60%]" ></iframe>
      </div>
    </div>
  );
}

export default About;
