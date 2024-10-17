import { SkillsData } from "@/Constants/Constant"


function Skills() {
   

  return (
    <section className="py-10 bg-gray-50 bg-inherit">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SkillsData.map(({ title, skills }) => (
            <div key={title} className="bg-inherit shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{title}</h3>
              <ul className="list-disc list-inside">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-400">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills