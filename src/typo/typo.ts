import mailCheck from 'mailcheck'

type Suggestion = {
    address: string
    domain: string
    full: string
}

export const isTypo = (email: string): { typeMistake: boolean; message?: string } => {
    let typeMistake = false
    let message = ''

    mailCheck.run({
        email,
        suggested: (suggestion: Suggestion) => {
            typeMistake = true
            message = `Did you mean ${suggestion.full}?`
        },
    })

    return { typeMistake, message }
}
