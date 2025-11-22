import { motion } from "framer-motion";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Amazon PPC Best Practices Guide",
      description:
        "Learn the fundamentals of Amazon PPC advertising and how to optimize your campaigns for maximum ROI.",
      category: "Guide",
    },
    {
      title: "CPG Brand Launch Checklist",
      description:
        "A comprehensive checklist for launching your CPG brand on Amazon successfully.",
      category: "Checklist",
    },
    {
      title: "Amazon SEO Optimization Tips",
      description:
        "Discover proven strategies to improve your Amazon listing rankings and visibility.",
      category: "Tips",
    },
    {
      title: "Brand Management Best Practices",
      description:
        "Learn how to effectively manage your Amazon brand reputation and customer relationships.",
      category: "Guide",
    },
  ];

  return (
    <div className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 text-shadow-lg">
            Resources
          </h1>
          <p className="text-xl md:text-2xl text-white font-bold">
            Helpful guides, tips, and resources to grow your Amazon business
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-xl bg-gradient-to-br ${
                index % 2 === 0
                  ? "from-gray-900 to-gray-800"
                  : "from-gray-900 via-purple-950/30 to-gray-800"
              } border border-gray-800 shadow-xl shadow-purple-500/20 p-8 min-h-[280px] hover:shadow-2xl hover:shadow-purple-500/40 hover:border-purple-500/50 transition-all cursor-pointer hover:scale-[1.02]`}
            >
              <span className="inline-block px-4 py-2 bg-primary text-white text-sm font-bold mb-5 shadow-lg shadow-purple-500/50">
                {resource.category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-4">
                {resource.title}
              </h3>
              <p className="text-white mb-6 font-semibold text-lg leading-relaxed">
                {resource.description}
              </p>
              <a
                href="#"
                className="text-purple-400 font-bold hover:text-purple-300 transition-colors text-lg"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
