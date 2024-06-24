<div className="my-16">
  <Container>
    {properties.map((property, index) => (
      <div
        key={property.id}
        className={`flex flex-col lg:flex-row lg:justify-between mb-56 ${
          index % 2 !== 0
            ? "lg:flex-row-reverse mb-10 mt-64"
            : index === 2
            ? "-mt-28 md:mb-16 "
            : ""
        }`}
      >
        <div className="lg:w-1/2 mb-4 lg:mb-0 relative">
          <img
            src={property.imageUrl}
            alt="Property"
            className="max-w-[458px] max-h-[400px] xl:w-[458px] xl:h-[400px] object-cover rounded-[8px] shadow-lg"
          />
          <img
            src={property.extendImageUrl}
            alt="Property-Extend"
            className={`max-w-[452px] lg:w-[452px] max-h-[240px] lg:h-[240px] object-cover rounded-[8px] shadow-lg absolute md:left-[60px] md:-bottom-[104px] lg:left-[35px] lg:-bottom-[104px] xl:left-[104px] xl-bottom-[104px] ${
              index % 2 !== 0
                ? "md:left-[40px] md:-top-[110px]  lg:left-[40px] lg:-top-[110px] xl:left-[104px] xl:-top-[110px]"
                : ""
            }`}
          />
          <img
            src={player}
            alt="player"
            className={`absolute  lg:top-[230px] lg:left-[360px] xl:left-[422px] xl:top-[228px] xl:w-[72px] h-[72px] ${
              index % 2 !== 0
                ? "lg:left-[px] lg:top-[-25px] xl:left-[70px] xl:top-[-25px]"
                : ""
            }`}
          />
        </div>
        <div
          className={`lg:w-1/2 lg:pl-8 text-center lg:text-left mt-32 lg:mt-0 ${
            index % 2 !== 0 ? "mt-10 lg:-mt-0" : ""
          }`}
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
          <Button className="bg-[#E6EFF7] border border-[#E6EFF7] hover:bg-[#E6EFF7] hover:border-[#E6EFF7] text-[#00437C] px-3 py-5 flex justify-center items-center rounded-[8px] mx-auto">
            <span>
              <img src={search} alt="" />
            </span>
            <span className="ml-1 md:text-base">Find Property</span>
          </Button>
        </div>
      </div>
    ))}
  </Container>
</div>;
