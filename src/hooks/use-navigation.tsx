import { usePathname } from "next/navigation";

export const usePagePath = () => {
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  // Find the userSlug (first occurrence of user_{...})
  const userSlug = pathParts.find(part => /^user_\w+$/.test(part)) || null;

  const page = pathParts.length > 0 ? pathParts[pathParts.length - 1] : null;

  return { page, pathname, userSlug };
};