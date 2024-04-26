export interface ILogin {
emai:string,
password:string
}
export interface IRegister {
    userName:string,
    email:string,
    country:string,
    phoneNumber:string,
    profileImage:string,
    password:string,
    confirmPassword:string
}
export interface decoded {
    userId: number
    roles: string[]
    userName: string
    userEmail: string
    userGroup: string
    iat: number
    exp: number
  }