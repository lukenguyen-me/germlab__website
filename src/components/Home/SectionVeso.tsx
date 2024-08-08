import Button from "@/components/common/Button";
import classNames from "classnames";
import Image from "next/image";

export default function SectionVeso() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center gap-10 md:gap-40">
      <div>
        <Image
          width={400}
          height={400}
          alt="mockup_imac"
          src="/images/mockup_imac.png"
        />
      </div>
      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <label className="text-primary">Published</label>
          <h2 className="text-4xl md:text-6xl">Veso</h2>
        </div>
        <ul
          style={{ maxWidth: 600 }}
          className={classNames("flex flex-col gap-4", "mt-4 md:mt-20")}
        >
          <li>Works in Vietnamese only.</li>
          <li>Available on website and mobile applications (iOS / Android).</li>
          <li>
            Quickly check lottery result by scanning physical ticket or
            selecting picture.
          </li>
          <li>
            Check latest lottery results of all 63 Vietnamese lottery companies.
          </li>
        </ul>
        <div>
          <a href="https://veso.germlab.dev/" target="_blank">
            <Button>Enter Veso</Button>
          </a>
        </div>
      </div>
    </div>
  );
}