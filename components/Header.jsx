import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="flex justify-between px-10">
      <div>
        <h1 className="gradient text-4xl outfit">PocoAI </h1>
      </div>
      <div className="pt-2">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <Button>Sign In</Button>
          </SignInButton>
        </SignedOut>
      </div>
    </header>
  );
}
