import { motion } from "framer-motion";

const svgIconVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)",
    stroke: "rgba(255,255,255, 0)",
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: "rgba(255, 215, 0, 1)",
    stroke: "rgba(255, 215, 0, 1)",
  },
};

const Logo = () => {
  return (
    <div className="Logo cursor-pointer ">
      <a href="/" className="flex items-center space-x-2">
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={svgIconVariants}
            initial="hidden"
            animate="visible"
            transition={{
              default: {
                duration: 2,
                ease: "easeInOut",
                delay: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
              fill: {
                duration: 2,
                ease: "easeIn",
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 1,
              },
            }}
            d="M10,50 a40,40 0 1,0 80,0 a40,40 0 1,0 -80,0"
            fill="none"
            stroke="blue"
            strokeWidth="2"
          />
          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="10"
            fill="#fecdd3"
            textAnchor="middle"
            alignmentBaseline="central"
          >
            Frontend Flow
          </text>
          <line
            x1="20" // Starting x-coordinate of the line
            y1="60" // Starting y-coordinate of the line
            x2="80" // Ending x-coordinate of the line
            y2="60" // Ending y-coordinate of the line (same as y1)
            stroke="#fecdd3" // Color of the underline
            strokeWidth="1" // Thickness of the underline
            strokeDasharray="2, 2, 4, 2" // Dot-dash pattern (dot, space, dash, space)
          />
        </motion.svg>
      </a>
    </div>
  );
};

export default Logo;
