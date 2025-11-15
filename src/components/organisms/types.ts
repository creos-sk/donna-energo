export interface MarkdownSectionProps {
  markdown?: string;
  wrapperClass?: string;
  containerClass?: string;
  proseClass?: string;
  enableSanitization?: boolean;
  markdownOptions?: {
    breaks?: boolean;
    gfm?: boolean;
    headerIds?: boolean;
    mangle?: boolean;
    [key: string]: any;
  };
}
