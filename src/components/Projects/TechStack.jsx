const TechStack = ({ techStack }) => {
    return (
      <div className="mt-2 space-y-3">
        {techStack.split("|").map((section, index) => {
          const [category, techs] = section.split(":");
          return (
            <div key={index}>
              <strong className="block text-gray-300">{category.trim()}:</strong>
              <div className="flex flex-wrap gap-2 mt-1">
                {techs.split(",").map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full shadow-md"
                  >
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  export default TechStack;
  