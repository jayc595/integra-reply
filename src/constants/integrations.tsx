import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react"

type INTEGRATION_CARD_TYPE = {
    title: string
    description: string
    icon: React.ReactNode
    type: 'INSTAGRAM' | 'FACEBOOK' | 'WHATSAPP' | 'EMAIL'
}

export const INTEGRATION_CARD: INTEGRATION_CARD_TYPE[] = [
    {
        title: 'Connect Instagram',
        description: 'Automate your DMs and comments! Save time, boost engagement, and respond instantly to your audience with smart, keyword-driven replies. 📩✨',
        icon: <Instagram />,
        type: 'INSTAGRAM'
    },
    {
        title: 'Connect Facebook',
        description: 'Automate Messenger responses and post replies! Keep your audience engaged 24/7 with smart, instant replies tailored to their needs. 🚀📬',
        icon: <Facebook />,
        type: 'FACEBOOK'
    },
    {
        title: 'Connect Whatsapp',
        description: 'Real-time responses that keep your conversations flowing. Deliver instant replies and personalized interactions, all hassle-free! 💬🤖',
        icon: <MessageCircle/>,
        type: 'WHATSAPP'
    },
    {
        title: 'Connect Email',
        description: 'Automate responses and follow-ups effortlessly. Save time, stay organized, and ensure no message goes unanswered. 📧✔️',
        icon: <Mail />,
        type: 'EMAIL'
    }
]