export interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function extractTocItems(htmlContent: string): TocItem[] {
  const regex = /<h([23])\s+id="([^"]+)"[^>]*>(.*?)<\/h[23]>/g;
  const items: TocItem[] = [];
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    items.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3].replace(/<[^>]+>/g, ""),
    });
  }
  return items;
}
