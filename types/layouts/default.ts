export type Titel = {
    titel: string;
};

export type Paragraph = {
    text: string;
};

export type Img = {
    src: string;
    alt: string;
};

export type DownloadButton = {
    text: string;
    downloadLink: string;
};

export type Content = (Titel | Paragraph | Img | DownloadButton)[];