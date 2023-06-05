import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";

export const SidebarData = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/home",
  },
  {
    title: "Portfolio",
    icon: <ArticleIcon />,
    link: "/portfolio",
  },
  {
    title: "Contact",
    icon: <ContactPageIcon />,
    link: "/about",
  },
];
