
declare namespace JSX {
  interface IntrinsicElements {
    'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      'media-id'?: string;
      'wistia-popover'?: string | boolean;
      seo?: string | boolean;
      aspect?: string;
    };
  }
}
