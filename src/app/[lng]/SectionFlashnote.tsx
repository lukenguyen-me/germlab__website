import Button from "@/components/Button";
import classNames from "classnames";
import Image from "next/image";

export default function SectionFlashnote() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-40">
      <div className="flex flex-col gap-10 md:gap-20">
        <div>
          <label className="text-primary">Published</label>
          <h2 className="text-4xl md:text-6xl">Flashnote</h2>
        </div>
        <ul
          style={{ maxWidth: 600 }}
          className={classNames("flex flex-col gap-4", "mt-4 md:mt-20")}
        >
          <li>Available on website and mobile applications (iOS / Android).</li>
          <li>
            Start writing immediately with no distractions, just your notes
            front and center.
          </li>
          <li>
            Aesthetically pleasing, distraction-free design to keep you focused
            on what matters most—your notes.
          </li>
          <li>
            Seamlessly access your notes on all your devices. Your thoughts,
            always within reach.
          </li>
        </ul>
        <div>
          <a href="https://flashnote.germlab.dev/" target="_blank">
            <Button>Enter Flashnote</Button>
          </a>
        </div>
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
