"use client";
import Button from "@/components/shared/Button";

export function DownloadButton({
  text,
  downloadLink,
}: {
  text: string;
  downloadLink: string;
}) {
  return (
    <Button
      variant="primary"
      text={text}
      onClick={() => {
        const link = document.createElement("a");
        link.href = downloadLink;
        link.download = downloadLink.split("/").pop() || "download";
        link.click();
      }}
    />
  );
}
