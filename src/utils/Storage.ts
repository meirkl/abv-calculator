export type EquationMode = 'standard' | 'alternate';

const KEY = 'EquationMode';

export class Storage {
  static setEquationMode(mode: EquationMode) {
    localStorage.setItem(KEY, mode);
  }

  static getEquationMode() {
    return (localStorage.getItem(KEY) as EquationMode) || 'standard';
  }
}
