import {
  AssetManager,
  Atlas,
  CSprite,
  CSpriteProps,
  CTransform,
  CTransformProps,
  Entity,
  inject,
  TweenManager,
} from '@jume-labs/jume-engine';

import { CJump, CJumpProps } from '../components/cJump';

export class EAlien extends Entity {
  @inject
  private readonly assetManager!: AssetManager;

  constructor(x: number, y: number, tweens: TweenManager) {
    super();

    const atlas = this.assetManager.getAsset(Atlas, 'sprites');

    this.addComponent<CTransform, CTransformProps>(CTransform, { x, y });
    this.addComponent<CSprite, CSpriteProps>(CSprite, { atlas, frameName: 'alien' });
    this.addComponent<CJump, CJumpProps>(CJump, { tweens });
  }
}
