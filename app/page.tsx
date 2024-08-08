import Banner from "./components/Banner";
import Cook from "./components/Cook";
import Expert from "./components/Expert";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />

    </main>
  );
}
