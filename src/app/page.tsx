import classNames from "classnames";
import SectionFeebcollect from "@/components/Home/SectionFeebcollect";
import SectionVeso from "@/components/Home/SectionVeso";
import SectionFlashnote from "@/components/Home/SectionFlashnote";
import Hero from "@/components/Home/Hero";

export default function PageHome() {
  return (
    <main>
      <Hero />
      <section
        className={classNames("container mx-auto px-4 md:px-8 py-20 md:py-40")}
      >
        <SectionFeebcollect />
      </section>
      <section
        className={classNames("container mx-auto px-4 md:px-8 py-20 md:py-40")}
      >
        <SectionVeso />
      </section>
      <section
        className={classNames("container mx-auto px-4 md:px-8 py-20 md:py-40")}
      >
        <SectionFlashnote />
      </section>
    </main>
  );
}
