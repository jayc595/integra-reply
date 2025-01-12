"use server"

import { client } from "@/lib/prisma"
import { onCurrentUser } from "./user"

export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()
    try {
      const automation = await createAutomation(user.id, id)
      if (automation){
        return { status: 200, data: 'Automation created successfully', res: automation }
      } 

      return { status: 404, data: 'Oops! something went wrong' }
    } catch (error) {
      return { status: 500, data: `Internal server error: ${error}` }
    }
  }

  export const createAutomation = async (clerkId: string, id?: string) => {
    return await client.automations.create({
      data: {
        ...(id && { id })
      },
    })
  }