import { Scene, SRender } from '@jume-labs/jume-engine';

import { EAlien } from '../entities/eAlien';
import { ETile } from '../entities/eTile';

export class GameScene extends Scene {
  constructor() {
    super();

    this.addSystem(SRender, 0, {});

    this.cameras[0].bgColor.set(0.2, 0.5, 1, 1);

    this.addGround();

    this.addEntity(EAlien, { x: this.view.viewCenterX, y: this.view.viewHeight - 110, tweens: this.tweenManager });
  }

  private addGround(): void {
    for (let i = 0; i < 12; i++) {
      this.addEntity(ETile, { x: i * 70, y: this.view.viewHeight - 30 });
    }
  }
}
