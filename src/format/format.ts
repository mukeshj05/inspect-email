const EMAIL_REGEX = new RegExp(/^[a-zA-Z0-9]+[a-zA-Z0-9._-]+[a-zA-Z0-9]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+\.[a-zA-Z]{2,4}$/)

const isFormat = (email: string) => {
    return EMAIL_REGEX.test(email)
}

export default isFormat
