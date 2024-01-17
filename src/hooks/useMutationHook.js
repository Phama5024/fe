import { useMutation } from "@tanstack/react-query"

export const useMutationHooks = (funCallback) => {
    const mutation = useMutation({
        mutationFn: funCallback
    })
    return mutation
}