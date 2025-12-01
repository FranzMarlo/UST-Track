import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import Advisory from "../components/Advisory";
import Services from "../components/Services";
import ScrollToTopButton from "../components/ScrollToTopButton";
export default function Home() {
  return (
    <>
      <Header />
      <Dashboard />
      <Advisory />
      <Services />
      <ScrollToTopButton />
    </>
  );
}
