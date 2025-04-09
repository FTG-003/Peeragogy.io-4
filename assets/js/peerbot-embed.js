import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

Chatbot.init({
    chatflowid: "d5f669ab-e063-4302-bea8-8ea55335603b",
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
            welcomeMessage: '👋 Welcome! I’m your PeeragogyBot',
            errorMessage: 'Something went wrong. Try again or refresh the page.',
            backgroundColor: '#ffffff',
            backgroundImage: '',
            height: 700,
            width: 400,
            fontSize: 16,
            starterPrompts: [], // Corretto: Era un array definito male
            starterPromptFontSize: 15, // Ora è una proprietà valida separata da starterPrompts
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
                placeholder: 'Your co-learning journey starts here',
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
            }, // Virgola aggiunta se mancante (era presente nel tuo ultimo codice)
            footer: {
                textColor: "#a0a0a0",
                text: "π Nexus – v1.1.8",
                company: "Co-created by Fabrizio Terzi + OpenAI",
                companyLink: "https://github.com/FTG-003"
            } // Corretto: Rimossa parentesi graffa extra che era qui
        }, // Questa virgola chiude l'oggetto chatWindow
        customCSS: `
      /* Example: Customize button size if needed */
      /* .chat-button { width: 56px !important; height: 56px !important; } */
    `
    } // Questa graffa chiude l'oggetto theme
});
