import React from "react";
import { DownloadButton } from "./DownloadButton";

export default function DownloadSection({
  downloadLink,
  buttonText,
  children,
}: {
  children?: React.ReactNode;
  downloadLink: string;
  buttonText: string;
}) {
  return (
    <div className="my-10">
      <p className="text-center mb-5">{children}</p>
      <div className="flex justify-center">
        <DownloadButton text={buttonText} downloadLink={downloadLink} />
      </div>
    </div>
  );
}
