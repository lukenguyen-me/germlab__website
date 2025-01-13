import Hero from "@/components/Home/Hero";
import SectionStageShot from "@/components/Home/SectionStageShot";
import SectionVeso from "@/components/Home/SectionVeso";
import classNames from "classnames";

export default function PageHome() {
  return (
    <main>
      <Hero />
      <section
        className={classNames("container mx-auto px-4 py-20 md:px-8 md:py-20")}
      >
        <SectionStageShot />
      </section>
      <section
        className={classNames("container mx-auto px-4 py-20 md:px-8 md:py-20")}
      >
        <SectionVeso />
      </section>
    </main>
  );
}
