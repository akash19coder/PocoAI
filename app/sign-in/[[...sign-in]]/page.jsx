import { SignIn } from "@clerk/nextjs";
import { HeroHighlight } from "../../../components/ui/hero-highlight";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <>
      <HeroHighlight>
        <SignIn />;
      </HeroHighlight>
    </>
  );
}
