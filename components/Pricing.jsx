"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";
import Plan from "./Plan";

export function Pricing() {
  const tabs = [
    {
      title: "Monthly",
      value: "monthly",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-white to-white">
          <Plan type="monthly" />
        </div>
      ),
    },
    {
      title: "Annual",
      value: "annual",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br  from-white to-white">
          <Plan type="annual" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full text-center justify-start my-4">
      <p className="text-3xl p-8 gradient outfit">Pricing</p>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
