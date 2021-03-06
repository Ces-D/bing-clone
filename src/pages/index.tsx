import Head from "next/head";
import Container from "../components/Container";
import Banner from "../components/Header/Banner";
import MicrosoftLogo from "../components/MicrosoftLogo";
import SearchBar from "../components/SearchBar/SearchBar";
import Carrot from "../components/CarrotMenu/Carrot";
import Floor from "../components/Footer/Floor";

export default function Home() {
  return (
    <>
      <Head>
        <title>New Tab</title>
      </Head>
      <Container>
        <Banner />
        <div className="my-20 sm:mt-36">
          <MicrosoftLogo />
        </div>
        <div className="sticky top-1 sm:top-6">
          <SearchBar />
          <Carrot />
        </div>
        <Floor />
      </Container>
    </>
  );
}
