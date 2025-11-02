
import { PropsWithChildren } from "react";
import SideBar from "../SideBar/SideBar";
import { Bars3Icon } from "@heroicons/react/16/solid";

type Props = PropsWithChildren;
const MobileNavbar = (props: Props) => {
  return (
    <div className="md:hidden -z-50">
      <SideBar
        triggerIcon={<Bars3Icon className="w-4 bg-red-600" />}
        triggerClassName="absolute top-2 left-2 bg-red-500"
      >
        {props.children}
      </SideBar>
    </div>
  );
};

export default MobileNavbar;
