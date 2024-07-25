import { CharacterStatus } from "@/app/helpers/CharacterStatus";
import { useMemo } from "react";
import { getStatusClass } from "@/app/helpers/getStatusClass";

export default function ActiveCharacterStatus({
  data,
}: {
  data: CharacterStatus;
}) {
  const statusClsx = useMemo(() => {
    const outerCls = `${getStatusClass(data, "bg")} w-full rounded-full aspect-square animate-ping`;
    const innerCls = `${getStatusClass(data, "bg")} w-full rounded-full aspect-square absolute z-10 inset-0`;
    const textCls = `${getStatusClass(data, "text")} capitalize`;

    return {
      inner: innerCls,
      outer: outerCls,
      text: textCls,
    };
  }, [data]);

  return (
    <div className="flex w-full items-center space-x-[10px]">
      <div className="text-black">Status:</div>
      <div className={statusClsx.text}>{data}</div>
      <div className="relative aspect-square w-[15px]">
        <div className={statusClsx.outer} />
        <div className={statusClsx.inner} />
      </div>
    </div>
  );
}
