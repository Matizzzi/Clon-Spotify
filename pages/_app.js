import Head from "next/head";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>Clon Spotify</title>
        <meta name="description" content="Clon Spotify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen text-gray-300 bg-spotify-black">
        <Header setShowSidebar={setShowSidebar} />
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}
