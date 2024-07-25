import { CharacterStatus } from "@/app/helpers/CharacterStatus";

export const getStatusClass = (
  status: CharacterStatus,
  type: "bg" | "text",
) => {
  const baseClasses = {
    bg: {
      [CharacterStatus.ALIVE]: "bg-primary-green-500",
      [CharacterStatus.DEAD]: "bg-red-500",
      [CharacterStatus.UNKNOWN]: "bg-gray-500",
    },
    text: {
      [CharacterStatus.ALIVE]: "text-primary-green-500",
      [CharacterStatus.DEAD]: "text-red-500",
      [CharacterStatus.UNKNOWN]: "text-gray-500",
    },
  };

  return baseClasses[type][status];
};
