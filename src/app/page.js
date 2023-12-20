import { Header } from "@/components/homepage/components/Header";
import { Hero } from "@/components/homepage/components/Hero";
import { Events } from "@/components/homepage/components/Events";
import { Footer } from "@/components/homepage/components/Footer";
import { API_URL } from "@/config/apiUrl";

const getAllEvents = async () => {
  const res = await fetch(`${API_URL}/events`, {
    method: "GET",
  });
  const data = await res.json();
  return data;
};

export default async function Page() {
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
