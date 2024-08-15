import userAccountIcon from "src/assets/svg/your-account-icon.svg";
import creatorIcon from "src/assets/svg/creator-icon.svg";
import { ROUTES } from "src/utils/routes";
import { MdOutlineInterests } from "react-icons/md";
import analyticsIcon from "src/assets/svg/mdi_analytics.svg";
import AddUserIcon from "src/assets/svg/add-user.svg";
export const routingArr = [
  {
    icon: creatorIcon,
    label: "Creators",
    path: ROUTES.CREATOR,
  },
  {
    icon: userAccountIcon,
    label: "Users",
    path: ROUTES.USER,
  },
  {
    icon: creatorIcon,
    label: "Interest",
    path: ROUTES.INTEREST,
  },
  {
    icon: analyticsIcon,
    label: "Analytics",
    path: ROUTES.ANALYTICS,
  },
  {
    icon: AddUserIcon,
    label: "Creator Request",
    path: ROUTES.CREATOR_REQUEST,
  },
];
