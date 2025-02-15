export type Content = (
  | {
      titel: string;
    }
  | {
      text: string;
    }
  | {
      src: string;
      alt: string;
    }
  | {
      text: string;
      downloadLink: string;
    }
)[];
