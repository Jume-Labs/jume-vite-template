import { AssetManager, Atlas, inject, Scene, SceneManager } from '@jume-labs/jume-engine';

import { GameScene } from './gameScene';

export class LoadScene extends Scene {
  @inject
  private assetManager!: AssetManager;

  @inject
  private sceneManager!: SceneManager;

  constructor() {
    super();

    this.loadAssets()
      .then(() => {
        this.sceneManager.changeScene({ type: 'push', sceneType: GameScene, removeCurrent: true });
      })
      .catch((reason) => {
        throw reason;
      });
  }

  private async loadAssets(): Promise<void> {
    await this.assetManager.loadAsset(Atlas, 'sprites', 'assets/sprites');
  }
}
