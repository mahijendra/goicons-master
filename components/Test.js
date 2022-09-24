import React, { useState } from "react";
import "../pages/_app";
import copy from "copy-to-clipboard";
import { toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.css";
import { motion } from "framer-motion";
import { Tooltip } from "@material-tailwind/react";

toast.configure();

const mainPathVariant = {
  transition: {
    duration: 1,
    ease: "easeInOut",
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

const shapeVariations = {
  transition: {
    delay: 1,
    duration: 1,
    ease: "easeIn",
  },
  variants: {
    visible: {
      fillOpacity: 1,
      pathLength: 1,
    },
    hidden: {
      fillOpacity: 0,
      pathLength: 0,
    },
  },
};

// const svgVariants = {
//   start: {
//     opacity: 0,
//     pathLength: 0,
//   },
//   finished: {
//     opacity: 1,
//     pathLength: 1,
//     transition: {
//       duration: 2,
//       ease: "easeInOut",
//     },
//   },
// };

export default function Icons({ svgItem, index }) {
  // eslint-disable-next-line no-unused-vars
  const [showIcon, setShowIcon] = useState(true);

  const pathColor = "#5F32C7";
  const shapeColor = "#5F32C7";

  // Copied to clipboard
  function CopyToClipboard() {
    let val =
      '<svg width="24" height="24" viewBox="0 0 32 32" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg"><path d="' +
      svgItem.d +
      '" fill="currentColor" fill-rule="evenodd" clipxrule="evenodd"></path></svg>';
    copy(val);
    toast.dark("Copied to Clipboard!", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 1500,
      transition: Zoom,
    });
  }

  return (
    <Tooltip
      content={svgItem.title}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <motion.div
        className={`svgItem ${index} col-span-1 flex rounded-lg w-16 bg-icons border border-purple-100 items-center justify-center bg-gradient`}
        style={{ position: "relative" }}
      >
        <div
          className="relative flex flex-col divide-y divide-gray-100 hover:text-custom justify-center items-center py-5 cursor-pointer"
          onClick={CopyToClipboard}
        >
          <div className="flex-shrink-0 flex items-center justify-center text-white text-sm font-medium rounded-l-md cursor-pointer">
            <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6 text-custom">
              <motion.path
                {...mainPathVariant}
                d={svgItem.d}
                strokeLinejoin="round"
                strokeLinecap="round"
                initial="hidden"
                strokeWidth={0.5}
                animate="visible"
                stroke={pathColor}
                fill={shapeColor}
                {...shapeVariations}
              ></motion.path>
            </svg>
          </div>

          {/* <p className="pointer-events-none py-2 block truncate text-center text-xs font-light bg-gray-150 text-gray-700">
          {svgItem.title}
        </p> */}
        </div>
      </motion.div>
    </Tooltip>
  );
}


// <motion.div
// className={`svgItem ${index} col-span-1 border border-custom flex w-20 flex-col rounded-lg bg-white text-center `}
// style={{ position: "relative" }}
// >
// <div className="relative flex flex-1 flex-col divide-y divide-gray-100 hover:text-custom">
//   <div
//     className="block mx-auto w-20 flex-shrink-0 rounded-lg py-4 cursor-pointer"
//     onClick={CopyToClipboard}
//   >
//     <svg viewBox="0 0 32 32" className="mx-auto h-6 w-6 text-custom">
//       <motion.path
//         {...mainPathVariant}
//         d={svgItem.d}
//         strokeLinejoin="round"
//         strokeLinecap="round" .,t
//         initial="hidden"
//         strokeWidth={0.5}
//         animate="visible"
//         stroke={pathColor}
//         fill={shapeColor}
//         {...shapeVariations}
//       ></motion.path>
//     </svg>
//   </div>

//   <p className="pointer-events-none py-2 block truncate text-center text-xs font-light bg-gray-150 text-gray-700">
//     {svgItem.title}
//   </p>
// </div>
// </motion.div>
