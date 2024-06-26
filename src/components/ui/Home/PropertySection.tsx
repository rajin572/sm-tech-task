import propertyImg1 from "../../../assets/images/property-1.jpeg";
import propertyImg1extend from "../../../assets/images/property-1-extend.jpeg";
import propertyImg2 from "../../../assets/images/property-2.jpeg";
import propertyImg2extend from "../../../assets/images/property-2-extend.jpeg";
import propertyImg3 from "../../../assets/images/property-3.jpeg";
import propertyImg3extend from "../../../assets/images/property-3-extend.jpeg";
import search from "../../../assets/icons/propertySearch.png";
import player from "../../../assets/icons/player.png";
import { Button } from "../button";
import Container from "../Container";

const PropertySection = () => {
  const properties = [
    {
      id: 1,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg1,
      extendImageUrl: propertyImg1extend,
    },
    {
      id: 2,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg2,
      extendImageUrl: propertyImg2extend,
    },
    {
      id: 3,
      title: "Efficient and Transparent Home Buying Solutions",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      imageUrl: propertyImg3,
      extendImageUrl: propertyImg3extend,
    },
  ];

  return (
    <div className="my-16">
      <Container>
        {properties.map((property, index) => (
          <div
            key={property.id}
            className={`flex flex-col lg:flex-row lg:justify-between mb-56 ${
              property.id === 2
                ? "lg:flex-row-reverse mb-10 lg:mt-64"
                : index === 2
                ? "-mt-28 "
                : ""
            }`}
          >
            <div className="lg:w-1/2 mb-4 lg:mb-0 relative mx-auto">
              <img
                src={property.imageUrl}
                alt="Property"
                className="w-[280px] h-[180px] sm:min-w-[358px] sm:min-h-[300px] max-w-[458px] max-h-[400px] xl:w-[458px] xl:h-[400px] object-cover rounded-[8px] shadow-lg"
              />
              <img
                src={property.extendImageUrl}
                alt="Property-Extend"
                className={`w-[220px] h-[130px] sm:min-w-[352px] sm:min-h-[240px] max-w-[452px] max-h-[240px] xl:w-[452px] xl:h-[240px] object-cover rounded-[8px] shadow-lg absolute left-[60px] bottom-[-104px] sm:left-[60px] sm:-bottom-[104px] md:left-[60px] md:-bottom-[104px] lg:left-[35px] lg:-bottom-[104px] xl:left-[104px]xl-bottom-[104px] ${
                  property.id === 2
                    ? " lg:left-[40px] lg:-top-[110px] xl:left-[104px] xl:-top-[110px]"
                    : ""
                }`}
              />
              <img
                src={player}
                alt="player"
                className={`absolute top-[150px] left-[20px] sm:top-[230px] sm:left-[360px] md:top-[230px] md:left-[360px] lg:top-[150px] lg:left-[320px] xl:left-[422px] h-[72px] ${
                  property.id === 2
                    ? `
                    sm:left-[35px] sm:top-[-20px] md:left-[35px] md:top-[20px] lg:left-[5px] lg:top-[-20px] xl:left-[70px] xl:top-[-20px]
                    `
                    : property.id === 1 || property.id === 3
                    ? "xl:top-[228px]"
                    : "xl:top-[2280px]"
                }`}
              />
            </div>
            <div
              className={`lg:w-1/2 lg:pl-8 text-center lg:text-left mt-32 lg:mt-0 `}
            >
              <div className="flex items-center">
                <hr className="w-[51px] bg-[#F06711] text-[#F06711] border-[#F06711] h-[3px]" />

                <span className="text-[#F06711] text-lg font-semibold ml-2">
                  Property buying
                </span>
              </div>
              <h3 className="text-[40px] leading-[52px] font-bold text-[#111827] mt-4 mb-6">
                {property.title}
              </h3>
              <p className="text-[#667085] mb-12">{property.description}</p>
              <Button className="bg-[#E6EFF7] border border-[#E6EFF7] hover:bg-[#E6EFF7] hover:border-[#E6EFF7] text-[#00437C] px-3 py-5 flex justify-center items-center rounded-[8px] mx-auto lg:mx-0">
                <span>
                  <img src={search} alt="" />
                </span>
                <span className="ml-1 md:text-base">Find Property</span>
              </Button>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default PropertySection;
