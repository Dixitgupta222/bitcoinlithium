import Image from "next/image";
import styles from "./page.module.css";
import Intro from './components/sections/Intro';
import Partners from './components/sections/Partners';
import AfterPartners from './components/sections/About';
import Utility from './components/sections/Utility';
import Token from './components/sections/Token';
export default function Home() {
  return (
    <>
      <Intro />
      <Partners />
      <AfterPartners />
      <Utility/>
      <Token/>
    </>
  );
}
