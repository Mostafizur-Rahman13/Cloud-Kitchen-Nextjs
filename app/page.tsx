import Banner from "./components/Banner";
import Cook from "./components/Cook";
import Expert from "./components/Expert";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Work from "./components/Work";

export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      {/* <Features /> */}
      <Cook />
      <Expert />
      <Gallery />
      <Newsletter />

    </main>
  );
}
