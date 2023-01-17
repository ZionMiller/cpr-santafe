import styles from "./index.module.css";
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Faq from "../components/faq";
import Testimonial from "../components/testimonial";
import Cta from "../components/cta";

const Home: NextPage = () => {
  return (
    <>
      <Cta />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Home;
