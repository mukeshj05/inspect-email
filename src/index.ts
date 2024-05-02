import isDisposable from './disposable/disposable'
import isFormat from './format/format'
import { isBestMX } from './mx/mx'
import isFreeProvider from './provider/provider'
import { isTypo } from './typo/typo'

type Response = {
    email: string
    validFormat: null | boolean
    validTypo: null | boolean
    notDisposable: null | boolean
    notFreeProvider: null | boolean
    validMX: null | boolean
    message: null | string
}

export const validate = (email: string) => {
    const response: Response = {
        email: email,
        validFormat: null,
        validTypo: null,
        notDisposable: null,
        notFreeProvider: null,
        validMX: null,
        message: null,
    }

    if (!isFormat(email)) {
        response.validFormat = false
        response.message = 'Invalid email.'
    } else {
        response.validFormat = true
    }

    const { typeMistake, message } = isTypo(email)

    if (typeMistake) {
        response.validTypo = false
        response.message = message || null
    } else {
        response.validTypo = true
    }

    const emailDomain = email.split('@')[1]

    if (isDisposable(emailDomain)) {
        response.notDisposable = false
        response.message = 'Email is a disposable email.'
    } else {
        response.notDisposable = true
    }

    if (isFreeProvider(emailDomain)) {
        response.notFreeProvider = false
        response.message = 'Email belongs to a free email provider.'
    } else {
        response.notFreeProvider = true
    }

    if (isBestMX(emailDomain)) {
        response.validMX = false
        response.message = 'Invalid MX record.'
    } else {
        response.validMX = true
    }

    return response
}
