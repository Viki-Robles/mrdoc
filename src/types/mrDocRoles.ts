export enum mrDocRoles {
  none = "none", // can do nothing
  admin = "admin", // can do everything
  client = "client", // can express requirements, see proposals, see scorecards
  readonly = "readonly", // can see everything, can’t change anything
  dev = "dev", //deprecated
}

export enum mrDocContactType {
  staff = "staff", // mrDoc staff member
  client = "client",
}
