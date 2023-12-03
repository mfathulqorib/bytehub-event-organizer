import { Header } from "@/components/homepage/components/Header";
import { Hero } from "@/components/homepage/components/Hero";
import { Events } from "@/components/homepage/components/Events";
import { Footer } from "@/components/homepage/components/Footer";
import { API_URL } from "@/config/apiUrl";
import { useFetchData } from "@/components/homepage/components/hooks/useFetchData";

export default async function Page() {
  const getAllEvents = useFetchData();
  const { data } = await getAllEvents();
  return (
    <main>
      <Header />
      <Hero />
      <Events allData={data} />
      <Footer />
    </main>
  );
}
