import classNames from "classnames";
import Image from "next/image";

export default function SectionStageShot() {
  return (
    <div className="flex flex-col justify-center gap-10 md:flex-row md:gap-40">
      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <label className="text-primary">Published</label>
          <h2 className="text-4xl md:text-6xl">Stage Shot</h2>
        </div>
        <ul
          style={{ maxWidth: 600 }}
          className={classNames("flex flex-col gap-4")}
        >
          <li>Three taps to a perfect screenshot.</li>
          <li>
            Stage Shot simplifies creating professional visuals from your screen
            captures.
          </li>
          <li>Dark mode supported.</li>
          <li>Give your screenshots the spotlight they deserve!</li>
        </ul>
        {/* <div>
          <Button>Enter Feebcollect</Button>
        </div> */}
      </div>
      <div>
        <Image
          width={400}
          height={400}
          alt="mockup_imac"
          src="/images/demo_stageshot.webp"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
