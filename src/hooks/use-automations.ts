import { createAutomations } from "@/actions/automations"
import { useMutationData } from "./use-mutation-data"

export const useCreateAutomation = (id?: string, onSuccess?: (data: any) => void) => {
    const { mutate, isPending } = useMutationData(
        ['create-automation'],
        () => createAutomations(id),
        "user-automations",
        onSuccess
    )
    
    return { isPending, mutate }
}