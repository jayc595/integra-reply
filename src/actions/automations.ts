"use server"

import { client } from "@/lib/prisma"
import { onCurrentUser } from "./user"

export const createAutomations = async (id?: string) => {
    const user = await onCurrentUser()
    try {
      const automation = await create(user.id, id)
      if (automation){
        return { status: 200, data: 'Automation created successfully', res: automation }
      } 

      return { status: 404, data: 'Oops! something went wrong' }
    } catch (error) {
      return { status: 500, data: `Internal server error: ${error}` }
    }
  }

  export const create = async (clerkId: string, id?: string) => {
    return await client.user.update({
      where: {
        clerkId,
      },
      data: {
        automations: {
          create: {
            ...(id && { id }),
          },
        },
      },
    })
  }

  export const getAutomation = async (clerkId: string) => {
    return await client.user.findUnique({
      where: {
        clerkId,
      },
      select: {
        automations: {
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  export const getUserAutomations = async () => {
    const user = await onCurrentUser()
    const clerkId = user.id;
    try {
      const automations = await getAutomation(clerkId)
  
      if (automations && automations.automations.length > 0) {
        return {
          status: 200,
          data: "Automations fetched successfully",
          res: automations.automations
        };
      }
  
      return { status: 404, data: "No automations found", res: [] };
    } catch (error) {
      return { status: 500, data: `Internal server error: ${error}`, res: [] };
    }
  };

  export const getAutomationData = async (id: string) => {
    const user = await onCurrentUser()
    try{
      const automation = await client.automations.findUnique({
        where: {
          id
        }
      })

      if(automation){
        return { status: 200, res: automation }
      }

      return { status: 404, data: "No automations found" };
    } catch(error){
      return { status: 500, data: `Internal server error: ${error}` };
    }
  }

  export const updateAutomationName = async (id: string, name: string) => {
    try{
      const automation = await client.automations.update({
        where: {id},
        data: {
          name: name
        }
      })

      if(automation){
        return { status: 200, data: "Successfully updated Automation Name" }
      }

      return { status: 404, data: "Unable to find Automation"}
    } catch(error){
      return { status: 500, data: "Internal server error"}
    }
  }

  export const deleteAutomationById = async (id: string) => {
    try{
      const automation = await client.automations.delete({
        where: {id}
      })

      if(automation){
        return { status: 200, data: "Successfully deleted automation" }
      }

      return { status: 404, data: "Unable to find Automation"}
    } catch(error){
      return { status: 500, data: "Internal server error"}
    }
  }