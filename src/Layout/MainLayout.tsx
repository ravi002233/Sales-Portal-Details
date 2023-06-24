import React from "react";
import { useState } from "react";
import {
  ComponentsProvider,
  Page,
  Layout,
  Section,
  Footer,
  LayoutProps,
} from "@looker/components";
import Header from "../Components/Header/HeaderComponent";
import Tabs from "../Components/Tab/TabComponent";
import { menuList } from "./MenuList";
import Home from "../Home";
import underConstuction from "../Images/under_construction.png";

export default function MainLayout(props: LayoutProps) {
  const [currentMenu, setCurrentMenu] = useState({ tabs: [], item: "" });
  const changeMenu = (values: any) => {
    setCurrentMenu(values);
  };

  return (
    <ComponentsProvider>
      <Page>
        <Header menuList={menuList} changeMenu={changeMenu} />
        <Layout>
          <Section style={{ paddingTop: "10px" }}>
            {currentMenu.tabs.length == 0 ? (
              currentMenu.item != "" ? (
                <div style={{ textAlign: "center" }}>
                  <img
                    width="60%"
                    height="500vh"
                    src="https://raw.githubusercontent.com/khajamoh/looker-assets/main/No%20Permission%20Image.png"
                  />
                </div>
              ) : (
                <Home />
              )
            ) : (
              <Tabs currentMenu={currentMenu} />
            )}
          </Section>
        </Layout>
        <Footer>
          Footer
        </Footer>
      </Page>
    </ComponentsProvider>
  );
}
