import Amenities from "../components/ui/PropertyDetails/Amenities";
import OtherServices from "../components/ui/shared/OtherServices";
import Properties from "../components/ui/shared/Properties";

const PropertyDetails = () => {
  return (
    <div>
      <Amenities />
      <OtherServices />
      <Properties title="Others Nearby Properties" />
    </div>
  );
};

export default PropertyDetails;
