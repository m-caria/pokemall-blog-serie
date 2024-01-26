import type { LenientSVGProps } from "@builder.io/qwik";
import { component$ } from "@builder.io/qwik";

type Props = {
  text: string;
  length?: number;
} & LenientSVGProps<SVGSVGElement>;

const PokemonText = component$<Props>(({ text, length = 650, ...props }) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "inherit" }}
      class={[
        "text-pokemon-normal h-full fill-yellow-500 stroke-blue-900 stroke-2 font-pokemon",
        `${props.class}`,
      ]}
    >
      <text
        x="50%"
        y="50%"
        textLength={length}
        lengthAdjust="spacing"
        class="text-yellow-600"
        alignment-baseline="middle"
        text-anchor="middle"
      >
        {text}
      </text>
    </svg>
  );
});

export default PokemonText;
