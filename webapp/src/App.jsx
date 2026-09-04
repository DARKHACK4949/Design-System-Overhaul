import { useEffect } from "react";
import { ScrollTrigger } from "./lib/gsap";
import { useLenis } from "./hooks/useLenis";
import ProgressBar from "./components/ProgressBar";
import Cover from "./sections/Cover";
import Specimens from "./sections/Specimens";
import Constraint from "./sections/Constraint";
import TwelveButtons from "./sections/TwelveButtons";
import OnePattern from "./sections/OnePattern";
import Architecture from "./sections/Architecture";
import Specs from "./sections/Specs";
import Accessibility from "./sections/Accessibility";
import Screens from "./sections/Screens";
import Outcome from "./sections/Outcome";
import Reflection from "./sections/Reflection";

export default function App() {
  useLenis();

  useEffect(() => {
    // Fonts/images can change layout after ScrollTrigger has already measured
    // the page once, so re-measure shortly after mount and on window load.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 500);
    return () => {
      window.removeEventListener("load", refresh);
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      <ProgressBar />
      <Cover />
      <Specimens />
      <Constraint />
      <TwelveButtons />
      <OnePattern />
      <Architecture />
      <Specs />
      <Accessibility />
      <Screens />
      <Outcome />
      <Reflection />
    </>
  );
}
