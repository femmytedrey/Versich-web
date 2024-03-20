// Paths
export const homePath = "/";
export const dashboardPath = "/dashboard/";
export const signupPath = "/auth/signup/";
export const loginPath = "/auth/login/";
export const accountTypePath = "/as";

// Conditional paths based on account type
export const buyerPaths = {
  leads: "dashboard/auth/su/buyer/leads",
  profile: "dashboard/auth/su/buyer/profile",
  moreleads: "dashboard/auth/su/buyer/more-leads",
};

export const sellerPaths = {
  leads: "dashboard/auth/su/seller/leads",
  profile: "dashboard/auth/su/seller/profile",
  moreleads: "dashboard/auth/su/seller/more-leads",
};

// Accounts
export const BUYER = "buyer";
export const SELLER = "seller";
