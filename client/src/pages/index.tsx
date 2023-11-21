import Timeline from "@/components/Timeline";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>SNS MERN</title>
        </Head>
      </div>

      <div>
        <Timeline />
      </div>
    </>
  );
}
