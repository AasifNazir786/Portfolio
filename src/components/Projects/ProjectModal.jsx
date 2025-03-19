import { AnimatePresence, motion } from "framer-motion";
import TechStack from "./TechStack";

const ProjectModal = ({ isOpen, onClose, title, moreInfo }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
    {motion}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black bg-opacity-60 backdrop-blur-lg"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-lg p-6 border border-gray-700 shadow-2xl rounded-2xl bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-xl"
        >
          <button
            onClick={onClose}
            className="absolute p-2 text-gray-300 transition-all duration-200 bg-gray-700 rounded-full shadow-md top-4 right-4 hover:bg-gray-600 hover:text-white"
          >
            ✕
          </button>

          <div className="max-h-[70vh] overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-bold text-white">{title}</h2>

            <p className="mt-3 leading-relaxed text-gray-300">
              {typeof moreInfo === "object" ? (
                <>
                  <strong className="text-gray-100">Description:</strong> {moreInfo.fullDescription}
                  <br />

                  <strong className="block mt-4 text-gray-100">Tech Stack:</strong>
                  <TechStack techStack={moreInfo.techStack} />

                  <strong className="block mt-4 text-gray-100">Key Features:</strong>
                  <ul className="mt-2 space-y-2 text-gray-300 list-disc list-inside">
                    {moreInfo.keyFeatures.split("|").map((feature, index) => (
                      <li key={index}>{feature.trim()}</li>
                    ))}
                  </ul>
                </>
              ) : (
                moreInfo
              )}
            </p>
          </div>

          <div className="flex justify-end mt-6 space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-white transition-all duration-300 bg-red-600 rounded-lg shadow-md hover:bg-red-700 hover:shadow-lg"
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
