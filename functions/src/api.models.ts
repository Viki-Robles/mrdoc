export type APIResponse<T> =
  | {
      status: number
      data: T
      error?: never
    }
  | {
      status: number
      error: {
        messages: string[]
      }
      data?: never
    }
