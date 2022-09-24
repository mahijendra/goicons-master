import Icons from "./Test";

function Svg({ searchResults, handleMouse, showSvgTitle }) {
  return (
    <div className="lg:px-56 lg:py-8 px-12 py-6 sm:py-6 grid grid-cols-4 gap-x-5 gap-y-5 sm:grid-cols-4 sm:gap-6 md:grid-cols-6 lg:grid-cols-10 shadow-sm">
      {searchResults.map((svgItem, index) => (
        <Icons
         
          handleMouse={handleMouse}
          svgItem={svgItem}
          showSvgTitle={showSvgTitle}
          key={index}
          index={index}
        />
      ))}
    </div>
  );
}

export default Svg;

{
  /* <div className="lg:px-40 lg:py-24 grid grid-cols-4 md:mx-8 md:py-12 gap-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7">
{searchResults.map((svgItem, index) => (
  <Icons
    handleMouse={handleMouse}
    svgItem={svgItem}
    showSvgTitle={showSvgTitle}
    key={index}
    index={index}
  />
))}
</div> */
}
