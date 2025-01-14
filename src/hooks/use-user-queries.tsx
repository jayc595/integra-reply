import { getAutomationData, getUserAutomations } from "@/actions/automations"
import { onGetUserInfo } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

export const useQueryUser = () => {
    return useQuery({
      queryKey: ['user-profile'],
      queryFn: onGetUserInfo,
    })
  }

  export const useQueryAutomations = () => {
    return useQuery({
      queryKey: ['user-automations'],
      queryFn: getUserAutomations,
    })
  }

  export const useQueryAutomation = (id: string) => {
    return useQuery({
      queryKey: ['automation-info'],
      queryFn: () => getAutomationData(id)
    })
  }