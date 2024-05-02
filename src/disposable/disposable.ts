import domains from './domains'

const isDisposable = (emailDomain: string) => {
    return domains.includes(emailDomain)
}

export default isDisposable
