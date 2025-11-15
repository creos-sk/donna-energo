// src/components/ui/index.ts

// ========================================
// Atoms
// ========================================
import Heading from "../atoms/Heading.astro";
import Text from "../atoms/Text.astro";
import Button from "../atoms/Button.astro";
import Badge from "../atoms/Badge.astro";
import Image from "../atoms/Image.astro";
import Icon from "../atoms/Icon.astro";
import Link from "../atoms/Link.astro";
import BounceArrow from "../atoms/BounceArrow.astro";
import UnknownBlock from "../atoms/UnknownBlock.astro";
import ScrollToTopArrow from "../atoms/ScrollToTopArrow.astro";

// ========================================
// Molecules
// ========================================
import ButtonBlock from "../molecules/ButtonBlock.astro";

import GalleryItem from "../molecules/GalleryItem.astro";
import Card from "../molecules/Card.astro";
import ArticleItem from "../molecules/ArticleItem.astro";
import Breadcrumb from "../molecules/Breadcrumb.astro";

// ========================================
// Organisms
// ========================================
import ArticlePreview from "../organisms/ArticlePreview.astro";
import GalleryPreview from "../organisms/GalleryPreview.astro";
import TextImageSection from "../organisms/TextImageSection.astro";
import Hero from "../organisms/Hero.astro";
import LittleHero from "../organisms/LittleHero.astro";
import ContactInfo from "../organisms/ContactInfo.astro";
import Navbar from "../organisms/Navbar.astro";
import Footer from "../organisms/Footer.astro";
import LogoHero from "../organisms/LogoHero.astro";
import LogoNavbar from "../organisms/LogoNavbar.astro";
import SimpleNavbar from "../organisms/SimpleNavbar.astro";
import Section from "../organisms/Section.astro";
import SectionTitle from "../organisms/SectionTitle.astro";
import MarkdownSection from "../organisms/MarkdownSection.astro";

// ========================================
// TypeScript Types
// ========================================
export type {
  BadgeProps,
  BounceArrowProps,
  ButtonProps,
  HeadingProps,
  IconProps,
  ImageProps,
  LinkProps,
  TextProps,
  UnknownBlockProps,
} from "../atoms/types";

// ========================================
// UI Components Export (compatibility)
// ========================================
export const UIComponents = {
  // Atoms
  Heading,
  Text,
  Button,
  Badge,
  Image,
  Icon,
  Link,
  BounceArrow,
  UnknownBlock,
  ScrollToTopArrow,
  
  // Molecules
  ButtonBlock,
  GalleryItem,
  Card,
  ArticleItem,
  Breadcrumb,

  // Organisms
  ArticlePreview,
  GalleryPreview,
  TextImageSection,
  Hero,
  LittleHero,
  ContactInfo,
  Navbar,
  Footer,
  LogoHero,
  LogoNavbar,
  SimpleNavbar,
  Section,
  SectionTitle,
  MarkdownSection,
};

// ========================================
// Named Exports (for simple using)
// ========================================
export {
  // Atoms
  Heading,
  Text,
  Button,
  Badge,
  Image,
  Icon,
  Link,
  BounceArrow,
  UnknownBlock,
  ScrollToTopArrow,
  
  // Molecules
  ButtonBlock,
  GalleryItem,
  Card,
  ArticleItem,
  Breadcrumb,

  // Organisms
  ArticlePreview,
  GalleryPreview,
  TextImageSection,
  Hero,
  LittleHero,
  ContactInfo,
  Navbar,
  Footer,
  LogoHero,
  LogoNavbar,
  SimpleNavbar,
  Section,
  SectionTitle,
  MarkdownSection,

};
