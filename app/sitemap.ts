import type { MetadataRoute } from "next";
import { ALL_POSTS } from "@/data/blog";
import { SOLUTIONS } from "@/data/solutions";
import { SITE_URL } from "@/lib/site";

const MONTHS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

/** Blog dates are written out in Portuguese, e.g. "12 de agosto de 2026". */
function parsePostDate(date: string) {
  const match = date.match(/^(\d{1,2}) de (\S+) de (\d{4})$/);
  const month = match ? MONTHS.indexOf(match[2].toLowerCase()) : -1;
  return match && month >= 0 ? new Date(Date.UTC(Number(match[3]), month, Number(match[1]))) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/metodo", "/sobre", "/blog", "/diagnostico"].map((path) => ({ url: `${SITE_URL}${path}` }));
  const services = SOLUTIONS.map((s) => ({ url: `${SITE_URL}/servicos/${s.slug}` }));
  const posts = ALL_POSTS.map((p) => ({ url: `${SITE_URL}/blog/${p.slug}`, lastModified: parsePostDate(p.date) }));
  return [...pages, ...services, ...posts];
}
