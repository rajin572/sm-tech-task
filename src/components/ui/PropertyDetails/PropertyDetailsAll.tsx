import location from "../../../assets/icons/fi-bs-marker.png";
import image1 from "../../../assets/images/Frame 134.png";
import image2 from "../../../assets/images/Frame 135.png";
import image3 from "../../../assets/images/Frame 138.png";
import image4 from "../../../assets/images/Rectangle 23.png";
import bed from "../../../assets/icons/bed.png";
import bathtub from "../../../assets/icons/bathtub.png";
import balcony from "../../../assets/icons/balcony.png";
import shelves from "../../../assets/icons/shelves.png";

import Container from "../Container";
const PropertyDetailsAll = () => {
  return (
    <div className="my-11">
      <Container>
        {/* //*Header  */}
        <div className="">
          <div className="flex flex-col lg:flex-row lg:items-center mb-2">
            <h1 className=" text-xl font-semibold text-[#010101]">
              3 BHK Builder Floor for Sale in Site Ram Bazar Hyderabad
            </h1>
            <span className=" lg:ml-16 font-extrabold text-2xl">$ 300k</span>
          </div>
          <div className="flex items-center mb-8">
            <img src={location} alt="" className="size-4 mr-2" />
            <p className="text-[#606060] font-normal">
              Meadowshire Park, Greenfield, USA
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-3  gap-4 ">
          <div className="col-span-2">
            {/* //*Image Section */}
            <div>
              <img src={image1} alt="image1" className=" w-full" />
              <div className="flex items-center gap-2 lg:gap-5 my-4 flex-wrap">
                <img
                  src={image2}
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <img
                  src={image3}
                  alt="image1"
                  className="max-w-[70px] max-h-[40px] sm:max-w-[100px] sm:max-h-[80px]  md:max-w-[150px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[150px] max-auto"
                />
                <img
                  src={image4}
                  alt="image1"
                  className="max-w-[70px] h-[40px] sm:max-w-[100px] sm:h-[80px]  md:max-w-[150px] md:h-[90px] xl:max-w-[200px] xl:h-[110px] max-auto"
                />
              </div>
            </div>
            {/* //*Overview */}
            <div className="my-8 px-4 lg:px-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded py-8">
              <h1 className="text-2xl font-semibold">Overview</h1>
              <div className="grid w-full items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-4 border shadow-lg pt-4 rounded my-6">
                <p className="font-bold flex items-center mb-5">
                  <img src={bed} className="size-6" alt="" />
                  <span>2 Beds</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={bathtub} className="size-6" alt="" />
                  <span>2 Bath</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={balcony} className="size-6" alt="" />
                  <span>2 Balcony</span>
                </p>
                <p className="font-bold flex items-center mb-5">
                  <img src={shelves} className="size-6" alt="" />
                  <span>Fully Furnished</span>
                </p>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-5">
                  <div>
                    <p className="text-sm text-gray-400">Carpet Area</p>
                    <h1>2000 sqft</h1>
                    <p className="text-sm text-gray-400">$ 225/sqft</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Floor</p>
                    <h1>Second (Out of 6th floor)</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Transaction Type</p>
                    <h1>Ready to move</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Lift</p>
                    <h1>1</h1>
                  </div>
                </div>
              </div>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4s">
                  <div>
                    <p className="text-sm text-gray-400">Facing</p>
                    <h1>North - East</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Additional Rooms</p>
                    <h1>1 servant room & 1 gust room</h1>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Age of construction</p>
                    <h1>New Construction</h1>
                  </div>
                  <div>
                    <p></p>
                    <h1></h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* property value and map start */}
          {/* <div className="lg:mt-14 mx-auto col-span-3 lg:col-span-1">
            <div className="bg-blue-50 py-6 px-4 rounded">
              <p className="text-sm text-gray-500">Property Value</p>
              <h1 className="text-3xl font-bold my-4">$ 300k - $ 310k</h1>
              <p className="text-sm text-gray-500">
                Your bid can not be than 10% of the property Minimum value.
              </p>
              <div>
                <p className="text-sm">min</p>
                <h1 className="px-2 py-3 bg-white w-3/4 ms-4">$ 280k</h1>
                <p>max</p>
                <h1 className="px-2 py-3 bg-white w-3/4 ms-4">$ 320k</h1>
              </div>
              <div className="mt-6">
                <p>$280k</p>
                <p>$320k</p>
              </div>
              <div className="text-center ">
                <button className="px-6 py-3 bg-blue-500 rounded-md text-white btn">
                  Bid Property
                </button>
              </div>
            </div>
            <div className="mt-6  ">
              <img
                className="w-full h-[354px] rounded"
                src="https://s3-alpha-sig.figma.com/img/18e0/505f/0243f270b5bd3d4534df7043be08f139?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VOWt1Nn-oElF73njyMx0VYvY6GCLO4B-~mgtbhrHKOgu05ArrhTnvKXm5tU8yos1wripbY9AySqYMz-LlPbExPNY1Os1fHIKiQnvSMx5oQDriCooNeuic9EKLDLf8EjXTuo9ZFSs5KEIYat~97DA~n-VrZ3svXUfoui9b4z0KOuDO~MVWZJk5IV44K3iSAF-fMAjcHYqW4J-O3LpcFJMpgErIAz-i9i5pU0ISPq0cqzP1tQasoJLlHZQVkanNImzCLSOddfte3SFAe-jJs7fLy8wLsrsCB59fbQA4UAfRucGhL6YeNE7u8y-6pNnLl6YY2TDc3qa2-64gm~DHd7r2g__"
                alt=""
              />
            </div>
          </div> */}
        </div>
      </Container>
    </div>
  );
};

export default PropertyDetailsAll;
