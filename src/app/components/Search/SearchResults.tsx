"use client";
import SearchResultCard from "@/app/components/Search/SearchResultCard";
import { Fragment } from "react";
import { useAppSelector } from "@/app/lib/store";

export default function SearchResults() {
  const characters = useAppSelector((state) => state.character.characters);
  const loading = useAppSelector((state) => state.character.loading);

  if (!characters.length || !loading) return;

  return (
    <div className="absolute left-1/2 top-[10px] max-h-[220px] w-full -translate-x-1/2 overflow-y-auto rounded-[10px] border-2 border-primary-green-500 bg-black p-[5px] shadow-[0_20px_50px_rgba(116,_176,_50,_0.35)] lg:w-8/12">
      {characters.map((character) => (
        <Fragment key={character.id}>
          <SearchResultCard data={character} />
        </Fragment>
      ))}
    </div>
  );
}
