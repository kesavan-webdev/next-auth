import GameList from "@/components/gamelist/gamelist.component";
import Hero from "@/components/hero/hero.component";
import Search from "@/components/search/search.component";

export default function Home() {
  return (
    <div>
      <Hero />
      <Search />
      <GameList />
    </div>
  );
}
