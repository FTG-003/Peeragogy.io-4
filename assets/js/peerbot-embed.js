import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

Chatbot.init({
    chatflowid: "9c913bf8-5526-4e53-bd16-d9ed392f47a8",
    apiHost: "https://peeragogybot-flowise-production-68ec.up.railway.app",
    chatflowConfig: {},
    observersConfig: {},
    theme: {
        button: {
            backgroundColor: '#2B6CB0',
            right: 20,
            bottom: 20,
            size: 'large',
            dragAndDrop: true,
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/refs/heads/deploy-setup/assets/images/avatars/peeragogybot-avatar-white.svg',
            autoWindowOpen: {
                autoOpen: true,
                openDelay: 1000,
                autoOpenOnMobile: false
            }
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Need help exploring peeragogy?',
            tooltipBackgroundColor: '#2B6CB0',
            tooltipTextColor: 'white',
            tooltipFontSize: 14
        },
        disclaimer: {
            showDisclaimer: true,
            title: 'Peeragogy Handbook ChatBot',
            message: "By chatting here, you’re interacting with an AI trained on the Peeragogy Handbook. Peer-powered answers ahead!",
            textColor: '#1a202c',
            buttonColor: '#2B6CB0',
            buttonText: 'Let’s Go!',
            buttonTextColor: 'white',
            blurredBackgroundColor: 'rgba(0, 0, 0, 0.3)',
            backgroundColor: '#f0f4f8'
        },
        chatWindow: {
            showTitle: true,
            title: 'PeeragogyBot',
            titleAvatarSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/deploy-setup/assets/images/avatars/logo.svg',
            welcomeMessage: '👋 Welcome! I’m PeeragogyBot – your assistant for exploring the Peeragogy Handbook. Ask me anything about co-learning, peer strategies, or the handbook itself!',
            errorMessage: 'Something went wrong. Try again or refresh the page.',
            backgroundColor: '#ffffff',
            backgroundImage: '',
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: [
                "What is peeragogy?",
                "How does co-learning work?",
                "Who created the Peeragogy Handbook?"
            ],
            starterPromptFontSize: 15,
            showStarterPrompts: true,
            clearChatOnReload: false,
            sourceDocsTitle: 'Source:',
            renderHTML: true,
            botMessage: {
                backgroundColor: '#f0f4f8',
                textColor: '#1a202c',
                showAvatar: true,
              avatarSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/deploy-setup/assets/images/avatars/logo.svg'
            },
            userMessage: {
                backgroundColor: '#2B6CB0',
                textColor: '#ffffff',
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png'
            },
            textInput: {
                placeholder: 'Ask me something about peeragogy...',
                backgroundColor: '#ffffff',
                textColor: '#1a202c',
                sendButtonColor: '#2B6CB0',
                maxChars: 200,
                maxCharsWarningMessage: 'Try to keep your question under 200 characters.',
                autoFocus: true,
                sendMessageSound: true,
                receiveMessageSound: true
            },
            feedback: {
                type: 'thumbs',
                color: '#1a202c'
            },
            dateTime: {
                showDateTime: true,
                showDate: true,
                showTime: true
            },
             footer: {
                textColor: "#a0a0a0",
                text: "π Nexus – v1.1.8",
                company: "Co-created by Fabrizio Terzi + OpenAI",
                companyLink: "https://github.com/FTG-003"
                                }
        },
        customCSS: `
      /* Example: Customize button size if needed */
      /* .chat-button { width: 56px !important; height: 56px !important; } */
    `
    }
});
