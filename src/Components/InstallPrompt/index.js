/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import usePWA from "react-pwa-install-prompt";
import DownloadApp from "../../Images/dlc.png";
import PuzzleIcon from "../../Images/puzzle.png";
import { Wrapper, Image, Title } from "./style";

const Example = () => {
  // const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA();
  const { promptInstall } = usePWA();

  const onClickInstall = async () => {
    const didInstall = await promptInstall();
    if (didInstall) {
      console.log("installing");
    }

    if ("serviceWorker" in navigator) {
      const options = {
        body: "Dziękujemy za zaufanie, aplikacja zostanie dodana do ekranu głównego!",
        icon: DownloadApp,
        vibrate: [100, 50, 200],
        tag: "install-notification",
        renotify: true,
        actions: [
          { action: "confirm", title: "Ok", icon: DownloadApp },
          { action: "cancel", title: "Cancel", icon: DownloadApp },
        ],
      };
      navigator.serviceWorker.ready.then((swreg) => {
        swreg.showNotification("Rozpoczęto instalację", options);
      });
    }
  };

  return (
    <Wrapper>
      <Title>Games Change</Title>
      <Image src={DownloadApp} alt="Install app" onClick={onClickInstall} />
    </Wrapper>
  );
};

export default Example;
