import React, { useContext } from "react";
import HomeScreen from "../screens/HomeScreen";
import { MenuListContext } from "../utils/contexts";
import MenuScreen from "../screens/MenuScreen";
import NotFound from "../screens/NotFound";
import HistoryScreen from "../screens/HistoryScreen";
import PromoScreen from "../screens/PromoScreen";
import SettingScreen from "../screens/SettingScreen";
import CategoryScreen from "../screens/CategoryScreen";
import ProductScreen from "../screens/ProductScreen";

export default function Content() {
  const { menu } = useContext(MenuListContext);

  if (menu === "home") {
    return <HomeScreen />;
  }

  if (menu === "menu") {
    return <MenuScreen />;
  }

  if (menu === "history") {
    return <HistoryScreen />;
  }

  if (menu === "promo") {
    return <PromoScreen />;
  }

  if (menu === "setting") {
    return <SettingScreen />;
  }

  if (menu === "category") {
    return <CategoryScreen />;
  }

  if (menu === "product") {
    return <ProductScreen />;
  }

  return <NotFound />;
}
