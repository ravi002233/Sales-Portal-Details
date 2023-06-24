import React, { useCallback } from "react";
import { LookerEmbedSDK } from "@looker/embed-sdk";
import styled from "styled-components";

export const Dashboard = (props: { id: number; env: string }) => {
  const [dashboard, setDashboard] = React.useState();
  const setupDashboard = (dashboard: any) => {
    setDashboard(dashboard);
  };

  const embedCtrRef = useCallback(function (el) {
    const hostUrl = "https://tte"+props.env+".cloud.looker.com/";
    if (el && hostUrl) {
      el.innerHTML = "";
      LookerEmbedSDK.init(hostUrl);
      LookerEmbedSDK.createDashboardWithId(props.id)
        .withNext()
        .appendTo(el)
        .build()
        .connect()
        .then(setupDashboard)

        .catch((error) => {
          console.error("Connection error", error);
        });
    }
  },[props.id]);
  return <EmbedContainer ref={embedCtrRef}></EmbedContainer>;
};
export const EmbedContainer = styled.div`
  width: 100%;
  height: 100vh;
  & > iframe {
    width: 100%;
    height: 100%;
  }
`;
