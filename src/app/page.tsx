import AppWrapper from "@/app/components/AppWrapper";
import SearchDisplay from "@/app/components/Search/SearchDisplay";

export default function Home() {
  return (
    <AppWrapper>
      <div className="space-y-[25px]">
        <SearchDisplay />
      </div>
    </AppWrapper>
  );
}
