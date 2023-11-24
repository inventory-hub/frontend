import {
  MenuItem,
  MenuList,
  MenuDivider,
  chakra,
  type ChakraStyledOptions,
} from "@chakra-ui/react";

import { BiUser } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { RiLogoutBoxLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { useRouter } from "next/router";
import { useAuthStore } from "~/stores/auth-store";

const styledOptions: ChakraStyledOptions = {
  baseStyle: {
    fontSize: "1.5rem",
  },
};
const BiUserIcon = chakra(BiUser, styledOptions);
const BsBellIcon = chakra(BsBell, styledOptions);
const AiOutlineSettingIcon = chakra(AiOutlineSetting, styledOptions);
const RiLogoutBoxLineIcon = chakra(RiLogoutBoxLine, styledOptions);

const HeaderMenuList = () => {
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);
  const handleLogout = () => {
    logout();
    router.push("/login", {
      query: {
        redirect: router.pathname,
      },
    });
  };
  return (
    <MenuList>
      <MenuItem icon={<BiUserIcon />}>Profile</MenuItem>
      <MenuItem icon={<BsBellIcon />}>Notifications</MenuItem>
      <MenuItem icon={<AiOutlineSettingIcon />}>Settings</MenuItem>
      <MenuDivider />
      <MenuItem onClick={handleLogout} icon={<RiLogoutBoxLineIcon />}>
        Logout
      </MenuItem>
    </MenuList>
  );
};

export default HeaderMenuList;
