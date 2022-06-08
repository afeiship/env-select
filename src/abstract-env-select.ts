import nx from '@jswork/next';
import CraEnvs from './cra-envs';

export default class AbstractEnvSelect {
  static ENVS = CraEnvs.get();
  /**
   * Auto select env by current url.
   * @returns {string} The target env string.
   */
  static select(): string {
    throw new Error('AbstractEnvSelect.select() is not implemented.');
  }

  /**
   * @param {string} inKey Get by key or from env or the whole env object.
   * @returns {any} The env object or string;
   */
  public static get(inKey?: string) {
    const env = this.select();
    const res = {
      env,
      ...this.ENVS[env],
    };

    return nx.get(res, inKey, res);
  }
}
