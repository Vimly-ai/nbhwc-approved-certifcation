
declare global {
  interface Window {
    Wistia: {
      embed: (mediaId: string, options: {
        videoFoam?: boolean;
        container?: string;
      }) => void;
    };
  }
}

declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'media-id'?: string;
      seo?: string | boolean;
      aspect?: string;
    };
  }
}

export {};
