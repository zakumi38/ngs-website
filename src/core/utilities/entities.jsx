import { faBloggerB } from "@fortawesome/free-brands-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faCalendarCheck, faUsers } from "@fortawesome/free-solid-svg-icons";

export const Entities = [
  {
    id: 1,
    icon: faBloggerB,
    title: "Blog",
    path: "/blog/",
  },
  {
    id: 2,
    icon: faCalendarCheck,
    title: "Event",
    path: "/events",
  },
  {
    id: 3,
    icon: faUsers,
    title: "Team",
    path: "/team",
  },
  {
    id: 4,
    icon: faImage,
    title: "Gallery",
    path: "/gallery",
  },
];
