import Image from "next/image";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import Hero from "@/components/Home/Hero";
import Search from "@/components/Home/Search";
import GameList from "@/components/Home/GameList";

export default function Home() {
  return (
    <div className="px-5 sm:px-10 md:px-16 mt-10">
    <Hero />
    <Search />
    <GameList />
    </div>
  );
}
