import { useEffect } from "react";

/**
 * Simple SEO hook using native useEffect
 * @param {string} title - Page title
 * @param {string} description - Meta description
 */
export function useSEO(title, description) {
  useEffect(() => {
    // Change the document title
    document.title = title;

    // Change or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;
  }, [title, description]);
}
