"use client";
import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const plans = [
  {
    type: "monthly",
    info: [
      {
        account: "Free",
        img: "/FreePlan.png",
        price: "$0",
        discount: "0%",
      },
      {
        account: "Pro",
        img: "/PremiumPlan.png",
        price: "$5",
        discount: "5%",
      },
    ],
  },
  {
    type: "annual",
    info: [
      {
        account: "Free",
        price: "$0",
        img: "/FreePlan.png",
        discount: "0%",
      },
      {
        account: "Pro",
        price: "$50",
        img: "/PremiumPlan.png",
        discount: "5%",
      },
    ],
  },
];

const Plan = ({ type }) => {
  return (
    <div className="flex justify-evenly">
      {type === "monthly" &&
        plans
          .filter((plan) => plan.type === "monthly")[0]
          .info.map((ele, idx) => (
            <div key={idx}>
              <PlanDetails
                type={ele.account}
                price={ele.price}
                discount={ele.discount}
                img={ele.img}
              />
            </div>
          ))}

      {type === "annual" &&
        plans
          .filter((plan) => plan.type === "annual")[0]
          .info.map((ele, idx) => (
            <div key={idx}>
              <PlanDetails
                type={ele.account}
                price={ele.price}
                discount={ele.discount}
                img={ele.img}
              />
            </div>
          ))}
    </div>
  );
};

const PlanDetails = ({ type, price, discount, img }) => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <p className=" text-[24px] text-black">{type}</p>
      </div>
      <div className="mt-4">
        <div className="text-black">
          <div>
            {price}
            <sup className="ml-2">
              <Badge className="font-thin">{discount} off</Badge>
            </sup>
          </div>
        </div>
        <p className="text-black text-sm font-light">
          per user/month, billed annually
        </p>
      </div>
      <Button>{type === "Free" ? "Generate" : "Subcribe"}</Button>
      <div className="text-black mt-8 text-left">
        <p className="text-[22px] outfit ml-12">For an individual</p>
        <ul className=" list-disc text-[16px] outfit font-light ml-12">
          {type === "Free" ? (
            <>
              <li>&#9989; Upto 10 flashcard generation</li>
              <li>&#10062; Save to database</li>
              <li>&#10062; Share with friends</li>
            </>
          ) : (
            <>
              <li> &#9989; Unlimited flashcard generation</li>
              <li> &#9989; Save to database</li>
              <li> &#9989; Share with friends</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Plan;
