import Chatbot from "https://cdn.jsdelivr.net/npm/flowise-embed/dist/web.js";

Chatbot.init({
    chatflowid: "d5f669ab-e063-4302-bea8-8ea55335603b",
    apiHost: "https://peeragogybot-flowise-production-68ec.up.railway.app",
    chatflowConfig: {},
    observersConfig: {},
    theme: {
        button: {
            // --- MODIFICHE TEMA CHIARO ---
            backgroundColor: '#4A5568', // Grigio medio-scuro come accento
            iconColor: 'white', // Icona bianca per contrasto
            // --- FINE MODIFICHE ---
            right: 20,
            bottom: 20,
            size: 'medium', // Mantenuto 'medium' per bilanciamento
            dragAndDrop: false, // Mantenuto: Disabilitato per mobile
            customIconSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/refs/heads/deploy-setup/assets/images/avatars/peeragogybot-avatar-white.svg', // Potresti volere un'icona scura se lo sfondo diventa chiaro
            autoWindowOpen: {
                autoOpen: true,
                openDelay: 1000,
                autoOpenOnMobile: false // MANTENUTO: Corretto per mobile
            }
        },
        tooltip: {
            showTooltip: true,
            tooltipMessage: 'Need help exploring peeragogy?',
            // --- MODIFICHE TEMA CHIARO ---
            tooltipBackgroundColor: '#4A5568', // Stesso accento del bottone
            tooltipTextColor: 'white', // Testo bianco per contrasto
            // --- FINE MODIFICHE ---
            tooltipFontSize: 14
        },
        disclaimer: {
            showDisclaimer: true,
            title: 'Peeragogy Handbook ChatBot',
            message: "By chatting here, you’re interacting with an AI trained on the Peeragogy Handbook. Peer-powered answers ahead!",
            // --- MODIFICHE TEMA CHIARO ---
            textColor: '#2D3748', // Grigio scuro per testo principale
            buttonColor: '#4A5568', // Accento per il bottone
            buttonText: 'Let’s Go!',
            buttonTextColor: 'white', // Testo bianco sul bottone
            blurredBackgroundColor: 'rgba(200, 200, 200, 0.5)', // Sfondo sfocato più chiaro
            backgroundColor: '#ffffff' // Sfondo bianco per il disclaimer
            // --- FINE MODIFICHE ---
        },
        chatWindow: {
            showTitle: true,
            title: 'PeeragogyBot',
            titleAvatarSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/deploy-setup/assets/images/avatars/logo.svg', // Assicurati che il logo sia visibile su sfondo chiaro
            welcomeMessage: '👋 Welcome! I’m your PeeragogyBot',
            errorMessage: 'Something went wrong. Try again or refresh the page.',
            // --- MODIFICHE TEMA CHIARO ---
            backgroundColor: '#ffffff', // Sfondo bianco principale
            // --- FINE MODIFICHE ---
            backgroundImage: '',
            fontSize: 16,
            starterPrompts: [],
            starterPromptFontSize: 15,
            showStarterPrompts: true,
            clearChatOnReload: false,
            sourceDocsTitle: 'Source:',
            renderHTML: true,
            botMessage: {
                // --- MODIFICHE TEMA CHIARO ---
                backgroundColor: '#EDF2F7', // Grigio molto chiaro per messaggi bot
                textColor: '#1A202C', // Testo nero/scuro
                // --- FINE MODIFICHE ---
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/FTG-003/Peeragogy_ChatBot/deploy-setup/assets/images/avatars/logo.svg'
            },
            userMessage: {
                // --- MODIFICHE TEMA CHIARO ---
                backgroundColor: '#4A5568', // Accento grigio per messaggi utente
                textColor: '#ffffff', // Testo bianco
                // --- FINE MODIFICHE ---
                showAvatar: true,
                avatarSrc: 'https://raw.githubusercontent.com/zahidkhawaja/langchain-chat-nextjs/main/public/usericon.png' // Assicurati che l'icona utente stia bene
            },
            textInput: {
                placeholder: 'Your co-learning journey starts here',
                // --- MODIFICHE TEMA CHIARO ---
                backgroundColor: '#ffffff', // Sfondo bianco
                textColor: '#1A202C', // Testo scuro
                sendButtonColor: '#4A5568', // Colore accento per l'icona invio
                // --- FINE MODIFICHE ---
                maxChars: 200,
                maxCharsWarningMessage: 'Try to keep your question under 200 characters.',
                autoFocus: true,
                sendMessageSound: true,
                receiveMessageSound: true
            },
            feedback: {
                type: 'thumbs',
                // --- MODIFICHE TEMA CHIARO ---
                color: '#718096' // Grigio medio per icone feedback
                // --- FINE MODIFICHE ---
            },
            dateTime: {
                showDateTime: true,
                showDate: true,
                showTime: true
                // Colore del testo data/ora erediterà probabilmente da stili generali o usa un grigio di default
            },
            footer: {
                // --- MODIFICHE TEMA CHIARO ---
                textColor: "#a0aec0", // Grigio più chiaro per il footer
                // --- FINE MODIFICHE ---
                text: "π Nexus – v1.1.8",
                company: "Co-created by Fabrizio Terzi + OpenAI",
                companyLink: "https://github.com/FTG-003"
            }
        },
        // --- CSS CUSTOM PER MOBILE FRIENDLINESS MANTENUTO ---
        customCSS: `
            /* Stili di default per desktop */
            flowise-chat-embed {
                 /* Esempio: max-width: 450px; max-height: 750px; */
            }

            /* Media Query per schermi più piccoli (es. telefoni) */
            @media (max-width: 600px) {
                flowise-chat-embed::part(chat-window) {
                    width: 90vw !important;
                    max-width: 400px !important;
                    height: 85vh !important;
                    max-height: 700px !important;
                    right: 10px !important;
                    bottom: 10px !important;
                }
            }
        `
        // --- FINE CSS CUSTOM ---
    }
});