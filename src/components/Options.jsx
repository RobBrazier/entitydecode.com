import { useStore } from "@nanostores/solid";
import { htmlEncode, urlDecode } from "../lib/store";

export default function Options() {
  const $htmlEncode = useStore(htmlEncode);
  const $urlDecode = useStore(urlDecode);
  return (
    <div id="options" class="flex flex-row justify-center gap-8">
      <label class="flex items-center gap-2 cursor-pointer">
        <input
          class="peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          type="checkbox"
          checked={$htmlEncode()}
          onClick={() => htmlEncode.set(!$htmlEncode())}
        />
        HTML Entity Encode/Decode
      </label>
      <label
        class="flex items-center gap-2 cursor-pointer"
        title="Currently only Decoding is supported as Encoding causes too many problems"
        aria-label="Currently only Decoding is supported as Encoding causes too many problems"
      >
        <input
          class="peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          type="checkbox"
          checked={$urlDecode()}
          onClick={() => urlDecode.set(!$urlDecode())}
        />
        URL Encoding Decode (?)
      </label>
    </div>
  );
}
