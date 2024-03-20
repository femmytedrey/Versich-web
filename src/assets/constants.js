// Paths
export const homePath = "/"
export const dashboardPath = "/dashboard/"
export const signupPath = "/auth/signup/"
export const loginPath = "/auth/login/"

// Conditional paths based on account type
export const buyerPaths = {
  leads: "/auth/su/buyer/leads/",
  profile: "/auth/su/buyer/profile/",
  moreleads: "/auth/su/buyer/more-leads/"
}

export const sellerPaths = {
  leads: "/auth/su/seller/leads/",
  profile: "/auth/su/seller/profile/",
  moreleads: "/auth/su/seller/more-leads/"
}

// Accounts
export const BUYER = "buyer"
export const SELLER = "seller"