/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import usePWA from "react-pwa-install-prompt";
import DownloadApp from "../../Images/dlc.png";
import { Wrapper, Image, Info } from "./style";

const Example = () => {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA();

  const onClickInstall = async () => {
    const didInstall = await promptInstall();
    if (didInstall) {
      console.log("installing");
    }
  };

  return (
    <Wrapper>
      <Info>Pobierz aplikacje:</Info>
      <Image src={DownloadApp} alt="Install app" onClick={onClickInstall} />
      <buttom onClick={onClickInstall}> install</buttom>
    </Wrapper>
  );
};

export default Example;
