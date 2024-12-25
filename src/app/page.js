import BigDropdown from "@/components/bigDropdown";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <div className="">
      <main className="flex lg:flex-row flex-col">
        <Menu />
        <div className="w-full flex justify-center items-center text-xl mt-10">
          Lütfen menüden bir işlem seçin!
        </div>
        <BigDropdown />
      </main>
      <footer className=""></footer>
    </div>
  );
}
