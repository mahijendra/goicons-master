import { useState, useEffect } from "react";
import Demo from "../components/Demo";
import Search from "../components/Search";
import Svg from "../components/svg";
import {svgData} from "../components/svgData";
import Share from "../components/footer";

// import Icons from "../components/Test";

const Index = () => {
  // eslint-disable-next-line no-unused-vars
  const [svgItems, setSvgItems] = useState(svgData);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSvgTitle, setShowSvgTitle] = useState(false);
  

  useEffect(() => {
    const results = svgItems.filter((svgIcon) =>
      svgIcon.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, Svg]);

  const handleMouse = (e, index) => {
    if (e.currentTarget.classList.contains(index)) {
      setShowSvgTitle(index);
    } else {
      setShowSvgTitle(false);
    }  
  };

  
  return (
    <div>
      <Demo />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Svg
        handleMouse={handleMouse}
        searchResults={searchResults}
        svgItems={svgItems}
        showSvgTitle={showSvgTitle}
      />
        <hr className="lg:max-w-7xl opacity-25 lg:mx-16 md:mx-4 sm:mx-5"></hr>
      <Share />
    </div>
  );
};

export default Index;
