import { onGetUserInfo } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

export const useQueryUser = () => {
    return useQuery({
      queryKey: ['user-profile'],
      queryFn: onGetUserInfo,
    })
  }