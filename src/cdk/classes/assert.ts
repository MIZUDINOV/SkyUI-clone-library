import { EMPTY_FUNCTION } from '../constants/empty';

export const suiAssert = {
  enabled: false,
  get assert(): (assert: boolean, ...args: any[]) => void {
    return this.enabled
      ? Function.prototype.bind.call(console.assert, console)
      : EMPTY_FUNCTION;
  },
};
