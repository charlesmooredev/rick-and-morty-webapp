import { Provider } from "react-redux";
import { store } from "@/app/lib/store";
import { ReactNode } from "react";

export default function ReduxProvider({
  children,
}: {
  children: ReactNode | ReactNode[];
}) {
  return <Provider store={store}>{children}</Provider>;
}
