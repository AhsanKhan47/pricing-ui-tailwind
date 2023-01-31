import { Inter } from "@next/font/google";
import Header from "@/app/components/Header";
import Cards from "@/app/components/Cards";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <Cards />
    </>
  );
}
