import Button from "@/components/Button";
import classNames from "classnames";
import Image from "next/image";

export default function SectionFeebcollect() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40">
      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <label className="text-primary">Upcoming</label>
          <h2 className="text-4xl md:text-6xl">Feebcollect</h2>
        </div>
        <ul
          style={{ maxWidth: 600 }}
          className={classNames("flex flex-col gap-4", "mt-4 md:mt-20")}
        >
          <li>
            Get feedbacks for your application (or any projects) in seconds.
          </li>
          <li>Manage collected feedbacks in the simplest way.</li>
          <li>Fast and easy integrate to your application.</li>
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
          src="/images/mockup_imac.png"
        />
      </div>
    </div>
  );
}
