import SearchInput from "@/app/components/Search/SearchInput";

export default function SearchDisplay() {
  return (
    <div className="flex w-full flex-col items-center space-y-[25px]">
      <div className="text-[1.5rem] text-primary-blue-500 lg:text-[2rem]">
        Rick And Morty Character Search
      </div>
      <SearchInput />
    </div>
  );
}
