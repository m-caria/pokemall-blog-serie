import { component$ } from "@builder.io/qwik";
import { PokemonText } from "~/components";

export default component$(() => {
  return (
    <div class="flex w-full justify-center">
      <PokemonText text="PokemAll" length={420} />
    </div>
  );
});
