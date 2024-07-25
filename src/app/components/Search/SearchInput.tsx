"use client";
import { useCallback, useEffect } from "react";
import { fetchRequest } from "@/app/features/fetchRequest";
import SearchResults from "@/app/components/Search/SearchResults";
import ActiveCharacterCard from "@/app/components/ActiveCharacter/ActiveCharacterCard";
import { useAppDispatch, useAppSelector } from "@/app/lib/store";
import {
  resetSearchQuery,
  setCharacters,
  setSearchQuery,
} from "@/app/lib/features/character/characterSlice";

export default function SearchInput() {
  const searchQuery = useAppSelector((state) => state.character.searchQuery);
  const dispatch = useAppDispatch();

  const searchCharactersFn = useCallback(() => {
    fetchRequest(
      `https://rickandmortyapi.com/api/character/?name=${searchQuery}`,
      "get",
    ).then((res) => {
      if (res.error) {
        dispatch(setCharacters([]));
      } else {
        dispatch(setCharacters(res.results));
      }
    });
  }, [dispatch, searchQuery]);

  useEffect(() => {
    if (searchQuery === "") return;

    searchCharactersFn();
  }, [searchCharactersFn, searchQuery]);

  return (
    <div className="flex w-full flex-col items-center lg:w-[400px]">
      <div className="relative flex w-full justify-center lg:w-8/12">
        {searchQuery !== "" && (
          <button
            className="absolute right-[20px] top-1/2 -translate-y-1/2 text-[2rem] text-red-500"
            onClick={() => dispatch(resetSearchQuery())}
          >
            X
          </button>
        )}
        <input
          value={searchQuery}
          type="text"
          className="w-full rounded-full border-2 border-primary-green-500 bg-primary-green-300 stroke-none p-[10px] text-[1.5rem] text-black outline-none"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          placeholder="Rick Sanchez..."
        />
      </div>
      <div className="relative w-full space-y-[25px]">
        <SearchResults />
        <ActiveCharacterCard />
      </div>
    </div>
  );
}
