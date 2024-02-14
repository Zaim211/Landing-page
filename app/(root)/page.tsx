import Link from "next/link";
import Intro from "@/components/shared/Intro";


const HomePage = () => {
  return (
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
      <Intro />
      <Link href="/feature"></Link>
      <Link href="/aboutus"></Link>
      <Link href="/contact"></Link>
    </section>
  );
};

export default HomePage;
