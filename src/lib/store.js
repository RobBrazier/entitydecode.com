import { atom, map } from "nanostores";

export const htmlEncode = atom(true);
export const urlDecode = atom(true);

export const focused = atom("");
export const value = map({
  encode: "",
  decode: "",
});
