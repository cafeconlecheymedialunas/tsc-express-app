import { hash, compare } from "bcryptjs"

const encrypt = async (pass: string) => {
    const passHash = await hash(pass, 10)
    return passHash
}
const verify = async (pass: string, passHash: string) => {
    const verified = await compare(pass, passHash)
    return verified;
}

export { encrypt, verify }