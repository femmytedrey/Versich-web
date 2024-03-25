// Paths
export const homePath = "/"
export const dashboardPath = "/dashboard/"
export const signupPath = "/auth/signup/"
export const loginPath = "/auth/login/"
export const setupPath = "/auth/su/"

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