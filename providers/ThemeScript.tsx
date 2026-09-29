import { THEME_STORAGE_KEY } from "@/lib/theme";

/**
 * Inline, blocking script rendered before hydration. It reads the saved
 * theme (or the OS preference) and sets the `dark` class on <html> right
 * away, so the page never flashes the wrong theme. Server-rendered on
 * purpose: React warns about <script> tags inside client components.
 */
export function ThemeScript() {
  const script = `(function(){try{var s=localStorage.getItem("${THEME_STORAGE_KEY}");var d=s==="dark"||(s!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches);if(d)document.documentElement.classList.add("dark")}catch(e){}})()`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
