// Paths
export const homePath = "/"
export const dashboardPath = "/dashboard/"
export const signupPath = "/auth/signup/"
export const loginPath = "/auth/login/"
export const setupPath = "/auth/su/"
export const emailVerificationPath = "/auth/verification/email/"

// Conditional paths based on account type
export const buyerPaths = {
    root: "/auth/su/buyer/",
    leads: "/auth/su/buyer/leads/",
    profile: "/auth/su/buyer/profile/",
    moreleads: "/auth/su/buyer/more-leads/"
}

export const sellerPaths = {
    root: "/auth/su/seller/",
    leads: "/auth/su/seller/leads/",
    profile: "/auth/su/seller/profile/",
    moreleads: "/auth/su/seller/more-leads/"
}

// Accounts
export const BUYER = "buyer"
export const SELLER = "seller"

// States
export const verificationStates = {
    verifying: {
        code: "verifying",
        text: "Verifying"
    },
    verified: {
        code: "verified",
        text: "Verified"
    },
    expired: {
        code: "expired",
        text: "Expired"
    }
}

// Cookie keys
export const SS_AUTH_ERROR = { key: "auth_error", value: "" }
export const SS_VERIFICATION_EMAIL = { key: "verification_email", value: "resend" }
export const SS_VERIFICATION_STATUS = { key: "verification_status", value: "pending" }
export const SS_ACCOUNT_TYPE = { key: "account_type", value: null }