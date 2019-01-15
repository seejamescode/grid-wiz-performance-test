import Pixels from "./Pixels";

const Index = ({ kirbyPixelData }) => (
  <div className="kirby--grid">
    {kirbyPixelData.map((item, index) => (
      <Pixels {...item} key={index} />
    ))}
  </div>
);

export default Index;
