import CharacterData = App.Data.CharacterData;
import { useCallback } from "react";
import { setActiveCharacter } from "@/app/lib/features/character/characterSlice";
import { useAppDispatch } from "@/app/lib/store";

export default function SearchResultCard({ data }: { data: CharacterData }) {
  const dispatch = useAppDispatch();

  const updateActiveCharacter = useCallback(() => {
    dispatch(setActiveCharacter(data));
  }, [data, dispatch]);

  return (
    <div
      className="transition-all-effects w-full cursor-pointer rounded-[8px] bg-black p-[5px] text-[1.25rem] text-primary-green-500 hover:bg-primary-green-500 hover:text-white"
      onClick={updateActiveCharacter}
    >
      {data.name}
    </div>
  );
}
