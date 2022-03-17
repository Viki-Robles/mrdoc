import { MrDocContactType, MrDocRoles } from '../types/mrDocRoles'

export enum AccountStatus {
  new = 'new',
  active = 'active',
  inactive = 'inactive',
}

export interface MrDocUser {
  id: string
  uid: string
  first_name: string
  last_name: string
  contact_number: string | null
  profileImageUrl?: string | null
  email?: string | null
  contactType?: MrDocContactType
  mrDocUser: {
    role: MrDocRoles
    accountStatus: AccountStatus
  }
  client: {
    job_title: string | null
    location: string | null
    organisation?: string
  } | null
}
