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
            // size: 'large', // Potresti provare 'medium' o lasciare 'large' e vedere come va
            size: 'medium', // Cambiato a medium per un miglior bilanciamento
            dragAndDrop: false, // MODIFICATO: Disabilitato drag and drop per migliore usabilità mobile
            iconColor: 'white',
            customIconSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/refs/heads/deploy-setup/assets/images/avatars/peeragogybot-avatar-white.svg',
            autoWindowOpen: {
                autoOpen: true,
                openDelay: 1000,
                autoOpenOnMobile: false // MANTENUTO: Corretto per mobile
            }
        },
        tooltip: {
            showTooltip: true, // Meno rilevante su mobile, ma innocuo
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
            // height: 700, // RIMOSSO: Gestito da customCSS per reattività
            // width: 400, // RIMOSSO: Gestito da customCSS per reattività
            fontSize: 16,
            starterPrompts: [],
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
            },
            footer: {
                textColor: "#a0a0a0",
                text: "π Nexus – v1.1.8",
                company: "Co-created by Fabrizio Terzi + OpenAI",
                companyLink: "https://github.com/FTG-003"
            }
        },
        // --- INIZIO MODIFICHE MOBILE FRIENDLY ---
        customCSS: `
            /* Stili di default per desktop (la libreria potrebbe applicare width/height di default) */
            flowise-chat-embed {
                 /* Potresti voler definire qui dimensioni massime per desktop se necessario */
                 /* Esempio: max-width: 450px; max-height: 750px; */
            }

            /* Media Query per schermi più piccoli (es. telefoni) */
            @media (max-width: 600px) {
                flowise-chat-embed::part(chat-window) { /* Selettore specifico per la shadow part, potrebbe cambiare a seconda della versione della libreria */
                    width: 90vw !important;   /* Larghezza: 90% della larghezza della viewport */
                    max-width: 400px !important; /* Limite massimo alla larghezza */
                    height: 85vh !important;  /* Altezza: 85% dell'altezza della viewport */
                    max-height: 700px !important; /* Limite massimo all'altezza */
                    right: 10px !important;   /* Più vicino al bordo su schermi piccoli */
                    bottom: 10px !important;  /* Più vicino al bordo su schermi piccoli */
                    /* Potresti dover aggiungere !important per sovrascrivere gli stili inline della libreria */
                }

                 /* Opzionale: Riduci la dimensione del pulsante se 'medium' non basta */
                 /* flowise-chat-embed::part(button) {
                    width: 50px !important;
                    height: 50px !important;
                 } */
            }
        `
        // --- FINE MODIFICHE MOBILE FRIENDLY ---
    }
});