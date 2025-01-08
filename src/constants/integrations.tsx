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
        description: 'Seamlessly connect your Instagram to IntegraReply and automate your DMs and comments! Save time, boost engagement, and respond instantly to your audience with smart, keyword-driven replies. 📩✨',
        icon: <Instagram />,
        type: 'INSTAGRAM'
    },
    {
        title: 'Connect Facebook',
        description: 'Connect your Facebook to IntegraReply and automate Messenger responses and post replies! Keep your audience engaged 24/7 with smart, instant replies tailored to their needs. 🚀📬',
        icon: <Facebook />,
        type: 'FACEBOOK'
    },
    {
        title: 'Connect Whatsapp',
        description: 'Link your WhatsApp to IntegraReply for automated, real-time responses that keep your conversations flowing. Deliver instant replies and personalized interactions, all hassle-free! 💬🤖',
        icon: <MessageCircle/>,
        type: 'WHATSAPP'
    },
    {
        title: 'Connect Email',
        description: 'Integrate your email with IntegraReply to automate responses and follow-ups effortlessly. Save time, stay organized, and ensure no message goes unanswered. 📧✔️',
        icon: <Mail />,
        type: 'EMAIL'
    }
]