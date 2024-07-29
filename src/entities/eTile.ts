import { AssetManager, Atlas, CSprite, CTransform, Entity, inject } from '@jume-labs/jume-engine';

export type ETileProps = {
  x: number;
  y: number;
};

export class ETile extends Entity {
  @inject
  private readonly assetManager!: AssetManager;

  constructor(props: ETileProps) {
    super();

    const { x, y } = props;

    const atlas = this.assetManager.getAsset(Atlas, 'sprites');

    this.addComponent(CTransform, { x, y });
    this.addComponent(CSprite, { atlas, frameName: 'ground' });
  }
}
