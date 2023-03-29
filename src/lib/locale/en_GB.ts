import { Dictionary } from "../types";

export const en_GB: Dictionary = {
    common: {
        autoTranslate: 'Auto translate',
        companyName: 'Kedmar20',
    },
    components: {
        app: {
            loading: 'Fetching supported languages...',
            empty: 'No supported language',
            error: 'Something went wrong...'
        },
        header: {
            github: 'Github',
            linkedin: 'Linked In',
            title: 'Translator ReactJS'
        },
        footer: {
            flatIcon: 'FlatIcon',
            libreTranslate: 'LibreTranslate'
        },
        message: {
            tryAgain: 'Try again'
        },
        confidence: {
            error: 'We could\'t detect the language'
        }
    },
    screens: {
        translator: {
            sourceInputPlaceholder: 'Type text here...'
        }
    }
}
