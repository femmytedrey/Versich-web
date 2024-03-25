import { BUYER, buyerPaths, sellerPaths } from "../../assets/constants"

export const getProfileLink = (accountType, progress) => {
    const paths = accountType === BUYER ? buyerPaths : sellerPaths
    if (progress < 50) {
        return paths.leads
    }
    else if (progress < 75) {
        return paths.profile
    }
    else if (progress < 100) {
        return paths.moreleads
    }
}