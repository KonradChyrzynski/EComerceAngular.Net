export interface ICookieManagementService{

    check(cookieKey: string): boolean

    set(cookieKey: string, value: string): void

    get(cookieKey: string): string
}