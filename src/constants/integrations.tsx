import { Instagram } from "lucide-react"

type INTEGRATION_CARD_TYPE = {
    title: string
    description: string
    icon: React.ReactNode
    type: 'INSTAGRAM' //@TODO: Add more card types.
}

export const INTEGRATION_CARD: INTEGRATION_CARD_TYPE[] = [
    {
        title: 'Connect Instagram',
        description: 'Seamlessly connect your Instagram to IntegraReply and automate your DMs and comments! Save time, boost engagement, and respond instantly to your audience with smart, keyword-driven replies. 📩✨',
        icon: <Instagram />,
        type: 'INSTAGRAM'
    }
]