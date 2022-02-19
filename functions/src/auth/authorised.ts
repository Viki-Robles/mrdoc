import { Request, Response } from 'express'

export function isAuthorized(opts: {
  hasRole: Array<'admin' | 'manager' | 'user'>
  allowSameUser?: boolean
}) {
  return (req: Request, res: Response, next: Function) => {
    const { role, email, uid } = res.locals
    const { id } = req.params

    if (email === 'your-root-user-email@domain.com') return next()

    if (opts.allowSameUser && id && uid === id) return next()

    if (!role) return res.status(403).send()

    if (opts.hasRole.includes(role)) return next()

    return res.status(403).send()
  }
}