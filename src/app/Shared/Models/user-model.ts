
export class UserModel {

  constructor(  public session: string,
                public JWTToken: string,
                public expDate: number,
                public role: string) {
  }
}
