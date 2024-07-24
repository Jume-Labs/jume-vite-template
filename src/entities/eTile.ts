import {
  AssetManager,
  Atlas,
  CSprite,
  CSpriteProps,
  CTransform,
  CTransformProps,
  Entity,
  inject,
} from '@jume-labs/jume-engine';

export class ETile extends Entity {
  @inject
  private readonly assetManager!: AssetManager;

  constructor(x: number, y: number) {
    super();

    const atlas = this.assetManager.getAsset(Atlas, 'sprites');

    this.addComponent<CTransform, CTransformProps>(CTransform, { x, y });
    this.addComponent<CSprite, CSpriteProps>(CSprite, { atlas, frameName: 'ground' });
  }
}
