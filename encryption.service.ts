@Injectable()
export class EncryptionService {
  constructor() { }
  private publicKey = ''

  private encrypt(str: string): string {
    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(this.publicKey);
    return encrypt.encrypt(str)
  }

  public encryptPassword(password: string): string {
    return this.encrypt(password);
  }
}
------------------------
@Injectable()
export class AuthStorageService {
  constructor(
    private _coockiesHelper: CookiesHelpersService
  ) {}

  public getAuthHeader(): HttpHeaders{
    let headers: HttpHeaders = new HttpHeaders();
    let token = this.getToken();
    if(token) {
      headers = headers.append("Authorization", token);
    }
    return headers;
  }

  public setToken(token) {
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate()+5);
    document.cookie = `token=${token}; expires=${expireDate.toUTCString()}`;
  }

  public getToken() {
    return this._coockiesHelper.getCookie('token');
  }

  public removeToken() {
    return this._coockiesHelper.deleteCookie('token');
  }
  
-------------
@Injectable()
export class CookiesHelpersService {

  public setCookie(name, value, options) {
    options = options || {};
    let expires = options.expires;

    if (typeof expires == "number" && expires) {
      const d = new Date();
      d.setTime(d.getTime() + expires);
      expires = options.expires = d;
    }

    if (expires && expires.toUTCString) {
      options.expires = expires.toUTCString();
    }

    value = encodeURIComponent(value);
    let updatedCookie = `${name}=${value}`;
    for (let propName in options) {
      updatedCookie += `;${propName}`;
      let propValue = options[propName];
      if (propValue !== true) {
        updatedCookie += `=${propValue}`;
      }
    }
    document.cookie = updatedCookie;
  }

  public getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  };

  public deleteCookie(name) {
    this.setCookie(name, "", {
      expires: -1
    })
  }

}
