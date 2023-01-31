"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/page.module.css";
import Header from "@/components/Header";
import Cards from "@/components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
