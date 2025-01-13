import { getUserAutomations } from "@/actions/automations"
import { onGetUserInfo } from "@/actions/user"
import { QueryClient, QueryFunction } from "@tanstack/react-query"

const prefetch = async (
    client: QueryClient,
    action: QueryFunction,
    key: string
 ) => {
    return await client.prefetchQuery({
        queryKey: [key],
        queryFn: action,
        staleTime: 80000,
    })
}

export const PrefetchUser = async (client: QueryClient) => {
    return await prefetch(client, onGetUserInfo, "user-profile")
}

export const PrefetchAutomations = async (client: QueryClient) => {
    return await prefetch(client, getUserAutomations, "user-automations")
}