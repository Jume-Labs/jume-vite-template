import { AssetManager, Atlas, CSprite, CTransform, Entity, inject, TweenManager } from '@jume-labs/jume-engine';

import { CJump } from '../components/cJump';

export type EAlienProps = {
  x: number;
  y: number;
  tweens: TweenManager;
};

export class EAlien extends Entity {
  @inject
  private readonly assetManager!: AssetManager;

  constructor(props: EAlienProps) {
    super();

    const { x, y, tweens } = props;

    const atlas = this.assetManager.getAsset(Atlas, 'sprites');

    this.addComponent(CTransform, { x, y });
    this.addComponent(CSprite, { atlas, frameName: 'alien' });
    this.addComponent(CJump, { tweens });
  }
}
