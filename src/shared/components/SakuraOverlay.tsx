import type { CSSProperties } from "react";

const PETALS = [
  { left: "6vw", size: "11px", duration: "13s", delay: "-6s", drift: "20px", alpha: "0.66" },
  { left: "14vw", size: "13px", duration: "16s", delay: "-2s", drift: "-24px", alpha: "0.58" },
  { left: "24vw", size: "10px", duration: "14s", delay: "-9s", drift: "18px", alpha: "0.62" },
  { left: "37vw", size: "12px", duration: "18s", delay: "-5s", drift: "-30px", alpha: "0.55" },
  { left: "49vw", size: "11px", duration: "15s", delay: "-11s", drift: "22px", alpha: "0.64" },
  { left: "61vw", size: "14px", duration: "19s", delay: "-4s", drift: "-26px", alpha: "0.6" },
  { left: "72vw", size: "10px", duration: "13s", delay: "-8s", drift: "20px", alpha: "0.68" },
  { left: "83vw", size: "12px", duration: "17s", delay: "-1s", drift: "-20px", alpha: "0.58" },
  { left: "92vw", size: "11px", duration: "15s", delay: "-7s", drift: "16px", alpha: "0.63" },
];

const ORBS = [
  { left: "9vw", size: "32px", duration: "18s", delay: "-8s", drift: "18px", alpha: "0.46" },
  { left: "22vw", size: "24px", duration: "22s", delay: "-3s", drift: "-24px", alpha: "0.52" },
  { left: "41vw", size: "28px", duration: "20s", delay: "-11s", drift: "20px", alpha: "0.48" },
  { left: "58vw", size: "20px", duration: "17s", delay: "-6s", drift: "-18px", alpha: "0.56" },
  { left: "74vw", size: "26px", duration: "21s", delay: "-14s", drift: "16px", alpha: "0.5" },
  { left: "89vw", size: "22px", duration: "19s", delay: "-9s", drift: "-16px", alpha: "0.54" },
];

function styleVars(vars: Record<string, string>): CSSProperties {
  return vars as unknown as CSSProperties;
}

export function SakuraOverlay() {
  return (
    <div className="sakura-overlay" aria-hidden="true">
      {ORBS.map((orb, idx) => (
        <span
          key={`orb-${idx}`}
          className="crimson-orb"
          style={styleVars({
            "--left": orb.left,
            "--size": orb.size,
            "--duration": orb.duration,
            "--delay": orb.delay,
            "--drift": orb.drift,
            "--alpha": orb.alpha,
          })}
        />
      ))}

      {PETALS.map((petal, idx) => (
        <span
          key={`petal-${idx}`}
          className="sakura-petal"
          style={styleVars({
            "--left": petal.left,
            "--size": petal.size,
            "--duration": petal.duration,
            "--delay": petal.delay,
            "--drift": petal.drift,
            "--alpha": petal.alpha,
          })}
        />
      ))}
    </div>
  );
}
