import classNames from "classnames";
import { FontTektur } from "../fonts";
import styles from "./styles.module.scss";
import Image from "next/image";
import Button from "@/components/Button";
import SectionFeebcollect from "./SectionFeebcollect";
import SectionVeso from "./SectionVeso";
import SectionFlashnote from "./SectionFlashnote";

export default function PageHome() {
  return (
    <main>
      <section className={classNames("relative", styles.intro)}>
        <div className={styles.mask} />
        <div
          className={classNames(
            "min-h-screen padding-header relative",
            "flex flex-col md:justify-center items-center md:items-start"
          )}
        >
          <div
            className={classNames("container", "px-8 md:px-20 pt-20 md:pt-0")}
          >
            <h1 className="text-4xl md:text-6xl">
              We Build Appliance
              <br />
              <strong
                className={classNames(
                  "text-primary text-8xl",
                  FontTektur.className
                )}
              >
                TOOLS
              </strong>
            </h1>
            <div className="mt mt-40 md:mt-20">
              <p>Make it fun. Make it yours.</p>
              <p>Build amazing things. Try our tools!</p>
            </div>
          </div>
        </div>
      </section>
      <section
        className={classNames("container mx-auto px-8 md:px-0 py-20 md:py-40")}
      >
        <SectionFeebcollect />
      </section>
      <section
        className={classNames("container mx-auto px-8 md:px-0 py-20 md:py-40")}
      >
        <SectionVeso />
      </section>
      <section
        className={classNames("container mx-auto px-8 md:px-0 py-20 md:py-40")}
      >
        <SectionFlashnote />
      </section>
    </main>
  );
}
