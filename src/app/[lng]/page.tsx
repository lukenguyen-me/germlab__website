import classNames from "classnames";
import Image from "next/image";
import { FontTektur } from "../fonts";

export default function PageHome() {
  return (
    <main>
      <div
        className="relative"
        style={{
          backgroundImage: 'url("/images/home_intro_bg.jpg")',
          backgroundSize: "cover",
          backgroundPositionY: "0%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%,  rgba(0,0,0,0) 70%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,1))",
          }}
        />
        <div
          className={classNames(
            "container min-h-screen relative ms-20",
            "flex flex-col justify-center"
          )}
        >
          <h1 className="text-6xl" style={{ lineHeight: 2 }}>
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
          <div className="mt-20">
            <p>Make it fun. Make it yours.</p>
            <p>Build amazing things. Try our tools!</p>
          </div>
        </div>
      </div>
    </main>
  );
}
