import { generateEnum } from './utils.js';

export default class Simon {
  constructor() {
    this.colors = [Light.RED, Light.BLUE, Light.GREEN, Light.YELLOW];
  }
}

const Light = generateEnum(['RED', 'BLUE', 'GREEN', 'YELLOW']);