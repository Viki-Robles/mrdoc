export enum MrDocRoles {
  none = "none", // can do nothing
  admin = "admin", // can do everything
  client = "client", // can express requirements, see proposals, see scorecards
  clientpreview = "clientpreview", // can express requirements, see proposals, see scorecards, BUT only on the preview channel
  readonly = "readonly", // can see everything, can’t change anything
  dev = "dev", //deprecated
}

export enum MrDocContactType {
  staff = "staff", // MrDoc staff member
  client = "client",
}
