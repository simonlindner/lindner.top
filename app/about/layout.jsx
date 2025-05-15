import Footer from "@/components/Footer";

export const metadata = {
  title: "Simon | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
