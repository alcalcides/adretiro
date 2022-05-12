import React from "react";

import MainMenuItem from "./MainMenuItem";

import adminAssets from "../../model/adminAssets.json";
const { mainPublicPages } = adminAssets;

export default function MainMenu({ currentSlugsPage}) {
  return (
    <ul id="MainMenu" className="my-5 list-unstyled">
      {mainPublicPages.map((page) => page.slug !== currentSlugsPage && (
        <MainMenuItem key={page.slug} label={page.title} slug={page.slug} />
      ))}
    </ul>
  );
}
