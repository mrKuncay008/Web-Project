import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  ArrowsPointingOutIcon,
  ServerStackIcon,
  RectangleStackIcon,
  ArrowLeftOnRectangleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import { Home, Profile, Income } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import Outcome from "./pages/dashboard/outcome";
import Bembukuan from "./pages/dashboard/pembukuan";
import Pembukuan from "./pages/dashboard/pembukuan";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
        path: "/home",
        element: <Home />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "Submit InCome",
        path: "/income",
        element: <Income />,
      },
      {
        icon: <ArrowsPointingOutIcon {...icon} />,
        name: "Submit OutCome",
        path: "/outcome",
        element: <Outcome />,
      },
      {
        icon: <BookOpenIcon {...icon} />,
        name: "Pembukuan",
        path: "/pembukuan",
        element: <Pembukuan />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ServerStackIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },

      {
        icon: <ArrowLeftOnRectangleIcon {...icon} />,
        name: "Logout",
        path: "/",
        element: <SignIn />,
      },
      {
        icon: <RectangleStackIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
