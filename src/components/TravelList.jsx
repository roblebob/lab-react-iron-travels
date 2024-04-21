import travelPlansData from "../assets/travel-plans.json";
import TravelPlanCard from "./TravelPlanCard";
import { useState } from "react";

const TravelList = () => {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const deleteItem = (id) => setTravelPlans(travelPlans.filter((travelPlan) => travelPlan.id !== id));
 

  return (
    <div
      className="travel-planes"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {travelPlans.map((travelPlan) => {
        return (
          <TravelPlanCard
            key={travelPlan.id}
            plan={travelPlan}
            deleteItem={deleteItem}
          />
        );
      })}
      ;
    </div>
  );
};
export default TravelList;
