import dns from 'dns'

export const isMX = (domain: string): dns.MxRecord[] => {
    let addressList: dns.MxRecord[] = []
    dns.resolveMx(domain, (err, addresses) => {
        if (err || !addresses) {
            addressList = []
        } else {
            addressList = [...addresses]
        }
    })
    return addressList
}

export const isBestMX = (domain: string): dns.MxRecord | undefined => {
    const addresses = isMX(domain)
    let bestIndex = 0

    for (let i = 0; i < addresses.length; i++) {
        if (addresses[i].priority < addresses[bestIndex].priority) {
            bestIndex = i
        }
    }

    return addresses[bestIndex]
}
