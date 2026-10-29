import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { Stamp } from "./Stamp";

type Props = {
  title: string;
  rows: [string, string][];
  stub: ReactNode;
  stamp: { text: string; tone?: "green" | "grey" };
};

/** Nhãn thuốc: giấy trên nhựa, DM Mono, cuống xé nét đứt, dấu đóng ở cuống. */
export function Label({ title, rows, stub, stamp }: Props) {
  return (
    <Reveal className="label">
      <h3>{title}</h3>
      <dl>{rows.map(([k, v]) => (<div key={k} style={{ display: "contents" }}><dt>{k}</dt><dd>{v}</dd></div>))}</dl>
      <div className="stub">{stub}<Stamp tone={stamp.tone}>{stamp.text}</Stamp></div>
    </Reveal>
  );
}
