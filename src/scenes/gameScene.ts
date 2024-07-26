import { Scene, SRender } from '@jume-labs/jume-engine';

import { EAlien } from '../entities/eAlien';
import { ETile } from '../entities/eTile';

export class GameScene extends Scene {
  constructor() {
    super();

    this.addSystem(SRender);

    this.cameras[0].bgColor.set(0.2, 0.5, 1, 1);

    this.addGround();

    const alien = new EAlien(this.view.viewCenterX, this.view.viewHeight - 110, this.tweenManager);
    this.addEntity(alien);
  }

  private addGround(): void {
    for (let i = 0; i < 12; i++) {
      const tile = new ETile(i * 70, this.view.viewHeight - 30);
      this.addEntity(tile);
    }
  }
}
