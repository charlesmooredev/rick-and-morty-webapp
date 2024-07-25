import { useAppSelector } from "@/app/lib/store";
import ActiveCharacterStatus from "@/app/components/ActiveCharacter/ActiveCharacterStatus";
import { CharacterStatus } from "@/app/helpers/CharacterStatus";

export default function ActiveCharacterCard() {
  const character = useAppSelector((state) => state.character.activeCharacter);

  if (character === null) return;

  return (
    <div className="mt-[25px] flex w-full justify-center">
      <div className="w-full space-y-[10px] rounded-[12px] border-2 border-primary-green-500 bg-primary-green-100 p-[10px] lg:w-8/12">
        <div className="text-center text-[1.5rem] text-primary-green-500">
          {character.name}
        </div>
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={character.image}
            alt={character.image}
            title={character.name}
            className="aspect-square w-8/12 rounded-[10px]"
          />
        </div>
        <div className="text-[1.15rem] text-black">
          <ActiveCharacterStatus data={character.status as CharacterStatus} />
          <div>Species: {character.species}</div>
          <div>Gender: {character.gender}</div>
          <div>Location: {character.location.name}</div>
        </div>
      </div>
    </div>
  );
}
