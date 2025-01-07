import { usePathname } from "next/navigation"

export const usePagePath = () => {
    const pathname = usePathname()
    const path = pathname.split('/')
    let page = path[path.length - 1];
    return {page, pathname}
}