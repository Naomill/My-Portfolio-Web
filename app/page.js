
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

export default function Home() {
  return (
    <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%]">
      <LeftSection />
      <RightSection />
    </div>
  );
}
