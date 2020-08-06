import { SdkConfiguration } from './models'

class Configuration {
  private config: SdkConfiguration = {
    baseApiUrl: 'https://api.ordercloud.io',
    apiVersion: 'v1',
    timeoutInMilliseconds: 60 * 1000, // 60 seconds by default
    clientID: null,
    cookieOptions: {
      samesite: 'lax', // browser default
      secure: false,
      domain: null,
      prefix: 'ordercloud',
    },
  }

  /**
   * @ignore
   * not part of public api, don't include in generated docs
   */
  constructor() {
    this.Set = this.Set.bind(this)
    this.Get = this.Get.bind(this)
  }

  Set(config: SdkConfiguration): void {
    this.config = { ...this.config, ...config }
  }

  Get(): SdkConfiguration {
    return this.config
  }
}

export default new Configuration()
