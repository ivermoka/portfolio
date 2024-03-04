import { atom } from "nanostores";

export const $currentTab = atom("hello.html");

export function setTab(value) {
  $currentTab.set("about.go");
  console.log(value);
}
