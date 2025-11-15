// /src/config/default_design.ts

export const defaultDesign = {

  // ===============================
  // GLOBAL LAYOUT
  // ===============================
  layout: {
    body: "bg-white text-gray-800 font-sans leading-relaxed antialiased",
    darkBody: "bg-black text-slate-100 font-sans leading-relaxed antialiased",
    section: "w-full py-16 sm:py-16 lg:py-16",
    container: "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",
    grid: {
      two: "grid grid-cols-1 gap-8 lg:grid-cols-2 items-center",
      three: "grid grid-cols-1 gap-8 md:grid-cols-3",
    },
  },

  // ===============================
  // TYPOGRAPHY
  // ===============================
  typography: {
    h1: "text-5xl md:text-6xl font-extrabold tracking-tight text-gray-800 mb-6",
    h2: "text-3xl md:text-4xl font-semibold tracking-tight text-gray-800 mb-4",
    h3: "text-2xl font-semibold text-gray-700 mb-3",
    p: "text-base leading-relaxed text-gray-600",
    small: "text-sm text-gray-500",
    link: "text-gray-700 hover:text-gray-900 underline underline-offset-2 transition-colors",
  },

  // ===============================
  // COLORS
  // ===============================
  colors: {
    primary: "bg-amber-500 text-white",
    secondary: "bg-gray-700 text-white",
    accent: "bg-orange-500 text-white",
    light: "bg-gray-50 text-slate-800",
    dark: "bg-gray-900 text-white",
  },

  // ===============================
  // LINKS
  // ===============================
  link: {
    base: "transition-colors duration-200",
    variants: {
      primary: "text-gray-900 hover:text-sky-600",
      secondary: "text-gray-800 hover:text-gray-900"
    }
  },

  // ===============================
  // BUTTONS
  // ===============================
  button: {
    base: "inline-flex items-center justify-center rounded-md font-medium transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed px-5 py-3",
    variants: {
      primary: "bg-gray-800 text-white hover:bg-gray-900",
      secondary: "bg-green-700 text-white hover:bg-green-800",
      accent: "bg-amber-400 text-gray-800 hover:bg-amber-600 hover:text-white",
      ghost: "bg-transparent text-gray-800 border border-white/30 hover:bg-white/90",
      lime: "bg-lime-400 text-gray-800 hover:bg-lime-800 hover:text-white",
      amber: "bg-amber-400 text-gray-800 hover:bg-amber-800 hover:text-white",
      emerald: "bg-emerald-400 text-gray-800 hover:bg-emerald-800 hover:text-white",
    },
  },

  // ===============================
  // BADGE
  // ===============================
  badge: {
    base: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
    variants: {
      primary: "bg-blue-600 text-white",
      secondary: "bg-slate-200 text-slate-800",
      accent: "bg-orange-500 text-white"
    }
  },  

  // ===============================
  // SCROLL TO TOP ARROW
  // ===============================
    scrollToTop: {
    button: "fixed bottom-6 right-6 bg-gray-500/50 cursor-pointer text-white p-3 rounded-full shadow-lg transition-opacity duration-300 opacity-0 hover:bg-gray-700",
    icon: "w-5 h-5",
  },

  // ===============================
  // CARD / BOX ELEMENTS
  // ===============================
  card: {
    base: "rounded-sm overflow-hidden border border-gray-100",
    hover: "hover:shadow-md transition-shadow duration-200",    
    header: "p-6 border-b border-gray-200",
    body: "p-6",
    footer: "p-6 border-t border-gray-200",
  },

  // ===============================
  // ICON
  // ===============================
  icon: {
    base: "inline-block",
    sizes: {
      4: "w-4 h-4",
      5: "w-5 h-5",
      6: "w-6 h-6",
      7: "w-7 h-7",
      8: "w-8 h-8",
      10: "h-4 w-auto",
      16: "h-16 w-auto",
      24: "h-24 w-auto",
      52: "h-52 w-52",
      64: "h-64 w-64",
      100: "h-auto w-auto"
    }
  },

  // ===============================
  // IMAGE
  // ===============================
  image: {
    base: "rounded-xs shadow-md object-cover",
    sizes: {
      sm: "w-24 h-24",
      md: "w-48 h-48",
      lg: "w-96 h-96",
      full: "w-full h-auto"
    }
  },  

  // ===============================
  // ARTICLES ITEM
  // ===============================
  articleItem: {
    // Retain original classes for normal state
    wrapper: "bg-white shadow-lg group overflow-hidden transition-shadow duration-600 transform hover:scale-[1.005] rounded-b-sm", 
    titleClass: "font-semibold text-sm",
    excerptClass: "text-xs text-stone-700 ",
    dateClass: "text-gray-500 text-xs",
    imageClass: "",

    // THIS IS THE NEW FALLBACK DESIGN
    placeholder: {
      // Base wrapper: without interactive hover effects
      wrapper: "mb-6 bg-gray-50 shadow-lg rounded-b-sm border border-gray-200 animate-pulse", 
      
      // Simulation of empty image (Gray block)
      imageClass: "h-32 w-full bg-gray-300 rounded-t-sm", 
      
      // Simulation of text lines
      titleClass: "h-4 bg-gray-300 w-3/4 mb-2 rounded", 
      excerptClass: "h-3 bg-gray-300 w-full mb-1 rounded",
      dateClass: "h-3 bg-gray-300 w-1/3 rounded"
    }
  },

// ===============================
// HERO
// ===============================
hero: {
    mainHeadingText: "Welcome to my site!",
    mainHeadingDesign: {
      mainHeadingColor: "text-gray-800",
      mainHeadingSize: "text-5xl",
      mainHeadingWeight: "font-black",
      mainHeadingAlign: "text-left",
    },
    bgColor: "bg-gray-400",
    overlayColor: "",
    bgImage: "",
    containerClass: "",
    left: {
      text: "This template provides a clean, performance-focused foundation using Astro and Tailwind. Manage content via Decap CMS and publish directly from Git.",
      textClass: "text-lg text-gray-700",
      buttons: [
        { label: "Start Building", href: "#", variant: "primary" },
        { label: "View Features", href: "#", variant: "secondary" },
      ],
    },
    right: {
      innerBox: "p-6 rounded-md bg-white/80 text-gray-900 shadow-md",
    },
    design: {
      wrapper: "relative w-full overflow-hidden",
      container: "flex flex-col gap-6",
      gap: "gap-6",
      py: "py-24",
      px: "px-4",
    },
  },

  // ===============================
  // LITTLE HERO
  // ===============================
  littleHero: {
    wrapper: "relative w-full flex flex-col justify-center items-center text-center overflow-hidden py-24 px-4",
    backgroundColor: "bg-gradient-to-br from-gray-400 to-gray-800",
    backgroundImage: "",
    overlayColor: "bg-black/30",

    title: {
      color: "text-white",
      gradient: "",
      size: "text-5xl",
      weight: "font-extrabold",
    },

    subtitle: {
      color: "text-white",
      size: "text-xl bg-fuchsia-900/30 shadow-xl shadow-fuchsia-500/50 rounded-md p-6",
    },

    arrowColor: "text-white",

    // 🔥 Button fallback
    buttonWrapper: "mt-8 flex justify-center",
  },

  // ===============================
  // ARTICLE PREVIEW
  // ===============================
  articlePreview: {
    wrapper: "grid grid-cols-1 md:grid-cols-3 gap-6",
    item: "col-span-1",
    spacing: "pt-0 pb-16",
    bgColor: "bg-gray-200"
  },

  // ===============================
  // GALLERY ITEM
  // ===============================
  galleryItem: {
    wrapper: "w-full ",
    inner: "gallery-item mx-auto text-center space-y-2 bg-white",
    image: "rounded-sm shadow-lg mx-auto",
    imageVariant: "rounded-sm",
    titleVariant: "small",
    titleClass: "text-gray-600 mt-2",
    skeleton: {
      wrapper: "w-full py-4 px-4",
      item: "text-xs"
    }
  },

  // ===============================
  // GALLERY PREVIEW
  // ===============================
  galleryPreview: {
    wrapper: "w-full py-24 px-4 bg-gray-200",
    title: "text-3xl font-bold text-center text-gray-700 mb-2",
    titleClass: "text-gray-600 mt-2 text-xs",
    titleVariant: "small",
    subtitle: "text-lg text-center text-gray-500 mb-24",
    item: "mb-6 break-inside rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg",
    image: "w-full object-cover rounded-md",
    imageVariant: "rounded",
  },

  // ===============================
  // TEXT + IMAGE SECTION
  // ===============================
  textImageSection: {
    wrapperClass: "w-full py-24",
    bgColor: "bg-gray-100",
    containerClass: "",
    textClass: "",
    imageClass: "flex-1 shadow-xl shadow-cyan-500/50 overflow-hidden rounded-md",
  },

  // ===============================
  // LOGO HERO
  // ===============================
  logoHero: {
    // ===============================
    // WRAPPER & BACKGROUND
    // ===============================
    wrapper: "w-full py-24 px-4 text-center",
    background: "bg-gray-800",

    // ===============================
    // LAYOUT
    // ===============================
    container: "flex flex-col items-center justify-center",
    content: "",

    // ===============================
    // LOGO
    // ===============================
    logoWrapper: "mb-6",
    logo: "inline-block",

    // ===============================
    // TEXTY
    // ===============================
    title: "text-4xl md:text-5xl font-black mb-6 uppercase",
    titleColor: "text-white",

    subtitle: "text-lg md:text-xl font-bold",
    subtitleColor: "text-sky-300",

    // ===============================
    // BUTTON
    // ===============================
    // we primarily determine only the placement — the Button itself has its own fallback in button.base / button.variants
    buttonWrapper: "mt-6 flex justify-center",

    // ===============================
    // BOUNCE ARROW
    // ===============================
    bounceArrowEnabled: false,
    bounceArrow: {
      size: 10,
      iconSize: 6,
      color: "text-sky-600",
      icon: "arrow-down",
      href: "#"
    }
  },

  // ===============================
  // SECTION TITLE
  // ===============================
  sectionTitle: {
    wrapper: "w-full",
    bgColor: "bg-gray-200",
    spacing: "pt-24 pb-6 px-4",
    borderBottom: "border-b border-gray-300", // or "gradient-1"
    container: "mx-auto flex flex-col",
    alignment: {
      left: "items-start text-left",
      center: "items-center text-center",
      right: "items-end text-right",
    },
    typography: {
      title: "text-gray-800 text-2xl font-bold",
      subtitle: "text-gray-700 text-sm md:text-base",
    },
    icon: {
      class: "h-6 w-6 text-gray-400",
    },
    gridCols: "grid-cols-1",
  },

  // ===============================
  // SECTION
  // ===============================
  section: {
    spacing: "pt-12 pb-24 px-4",
    background: "bg-white",
    textAlignment: {
      center: "text-center",
      left: "text-left",
    },
    gridCols: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
    },
    typography: {
      heading: "text-xl font-bold text-gray-800 my-6 ",
      text: "text-base text-gray-600 leading-relaxed",
    },

    // 🔥 Fallback - Card Button
    buttonWrapper: "mt-6 flex justify-center",
  },

  /// ===============================
  // CONTACT INFO
  // ===============================
  contactInfo: {
    defaultMaxWidth: "max-w-3xl",
    bgWrapper: "bg-stone-400",
    bgCard: "bg-stone-100",
    wrapper: "w-full py-24 px-4",
    content: "mx-auto space-y-6 flex flex-col items-center",
    card: "p-6 rounded-2xl shadow-sm backdrop-blur",
    badge: "text-xs px-4 py-2 rounded-full",
    qr: "w-24 h-24",
    textVariantSmall: "small-light",
    textVariantCenter: "small-light-center",
    textVariantMt: "small-light-mt",
  },

  // ===============================
  // MARKDOWN SECTION
  // ===============================
  markdownSection: {
    // Wrapper – entire section background
    wrapper: "bg-gray-100 py-24",

    // Fallback container – card style
    container: "bg-white p-10 rounded-2xl shadow-xl",

    // Prose
    prose: "prose prose-gray prose-headings:font-bold prose-a:text-blue-600",
  },


  /// ===============================
  // NAVBAR
  // ===============================
  navbar: {
    // -----------------------
    // SimpleNavbar
    // -----------------------
    simple: {
      wrapper: "bg-gray-900",
      container: "font-semibold",
      logo: { size: "h-24 w-auto sm:h-6 sm:w-6 hover:animate-pulse text-green-400/80", text: "text-white/80 hover:text-white text-2xl sm:text-base"},
      text: "text-white/80 ",
      textHover: "hover:text-white",
      icon: "w-5 h-5 text-green-400/50 hover:text-green-400/80 animate-pulsse",
      padding: "px-4 py-6",
    },

    // -----------------------
    // LogoNavbar
    // -----------------------
    logo: {
      wrapper: "bg-gray-500/90",
      logoWrapper: "flex justify-center items-center py-4",
      linksWrapper: "bg-gray-800 py-4",
      logoContainerWidth: "max-w-5xl mx-auto",
      logo: { size: "h-24 w-auto sm:h-16 sm:w-auto hover:animate-pulse", text: "text-white" },
      text: "text-white/80",
      textHover: "hover:text-white",
      icon: "text-gray-200/50 hover:text-gray-200/80 animate-pulse",
      padding: "px-4 py-5",
    },
  },

  // ===============================
  // FOOTER
  // ===============================
  footer: {
    wrapper: "py-24",
    container: "flex flex-col md:flex-row justify-between items-center px-4 gap-6",
    padding: "pt-12 pb-24 px-4",
    bgColor: "bg-gray-600",
    textColor: "text-white/80",
    textHoverColor: "hover:text-white",
    textSize: "text-sm",
    iconColor: "text-white/80 hover:text-white",
    iconSize: "w-5 h-5",
    logoSize: "w-6 h-6",
  },

}

// ============================================
// 🧠 Helper function for safe loading
// ============================================
export function getDefaultDesign() {
  // immutable return value
  return structuredClone(defaultDesign);
}
