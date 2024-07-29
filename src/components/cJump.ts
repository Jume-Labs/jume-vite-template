import {
  BaseComponentProps,
  Component,
  CTransform,
  easeInCubic,
  easeOutCubic,
  Tween,
  TweenManager,
  TweenSequence,
} from '@jume-labs/jume-engine';

export interface CJumpProps extends BaseComponentProps {
  tweens: TweenManager;
}

export class CJump extends Component {
  constructor(props: CJumpProps) {
    super(props);

    const { tweens } = props;

    const transform = this.getComponent(CTransform);

    const upTween = new Tween(
      transform.position,
      0.5,
      { y: transform.position.y },
      { y: transform.position.y - 100 }
    ).setEase(easeOutCubic);

    const downTween = new Tween(
      transform.position,
      0.5,
      { y: transform.position.y - 100 },
      { y: transform.position.y }
    ).setEase(easeInCubic);

    const sequence = new TweenSequence([upTween, downTween], -1);
    tweens.addSequence(sequence);
  }
}
