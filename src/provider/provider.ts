import domains from './domains'

const isFreeProvider = (emailDomain: string) => {
    return domains.includes(emailDomain)
}

export default isFreeProvider
