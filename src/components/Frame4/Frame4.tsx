import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Frame4.module.css';
import { InstagramIcon } from './InstagramIcon';

interface Props {
  className?: string;
}
/* @figmaId 772:32 */
export const Frame4: FC<Props> = memo(function Frame4(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.unnamed}>
        어느 깊은 숲속, 토끼, 양, 병아리 세 친구는 서로를 아끼고 돌보며 함께 지내고 있습니다. 하지만 그들 곁엔 언제나
        위협이 도사리고 있어요. 생존할 권리, 보호받을 권리, 자기 목소리를 낼 권리, 꿈을 키우며 자랄 권리를 침해받고
        있죠. 이제 그들의 이야기를 통해, 우리의 아이들에게 안전하고 행복한 미래를 선물해 주세요.
      </div>
      <div className={classes.frame2}>
        <div className={classes.unnamed2}>
          <div className={classes.textBlock}>우리 아이들은 안전하게 보호받고, </div>
          <div className={classes.textBlock2}>마음껏 자라날 권리가 있습니다.</div>
        </div>
        <div className={classes.unnamed3}>
          <div className={classes.textBlock3}>후원자님 덕분에 </div>
          <div className={classes.textBlock4}>아이들은 꿈을 꿀 수 있습니다.</div>
        </div>
        <div className={classes.unnamed4}>이 그립톡은 단순한 제품이 아닙니다.</div>
        <div className={classes.unnamed5}>아이들에게 더 나은 내일을 선물하세요.</div>
        <div className={classes.unnamed6}>
          세상 어딘가에 아직도 보호받지 못하고 혼자서 아픔을 견디는 아이들이 있습니다. 그 아이들이 누려야 할 기본적인
          권리인 생존권, 보호권, 발달권, 참여권이 위협받는 순간에도, 그들은 조용히 자신을 지키려 애쓰고 있을 뿐입니다.
          우리는 이 아이들에게 따뜻한 손길을 건네고 싶습니다
        </div>
        <div className={classes.unnamed7}>
          토끼의 간절한 눈빛, 양의 아픔, 병아리의 작은 목소리가 담겨 있습니다. 이 작은 그립톡 하나에, 아이들이 안전하고
          행복한 하루를 꿈꾸는 바람이 깃들어 있습니다.
        </div>
        <div className={classes.followUs}>Follow us</div>
        <div className={classes.instagram}>
          <InstagramIcon className={classes.icon} />
        </div>
        <div className={classes.twitter}></div>
        <div className={classes.sliderBG}></div>
        <div className={classes.sliderIndicator}></div>
        <div className={classes.frame1}>
          <div className={classes.start}>Start</div>
          <div className={classes._1}>01</div>
          <div className={classes._2}>02</div>
          <div className={classes._3}>03</div>
        </div>
        <div className={classes.rectangle1}></div>
        <div className={classes.rectangle4}></div>
        <div className={classes.rectangle5}></div>
        <div className={classes._12}>01</div>
        <div className={classes._22}>02</div>
        <div className={classes.unnamed8}>
          <div className={classes.textBlock5}>모든 아이들이 행복한 </div>
          <div className={classes.textBlock6}>세상을 위해, 함께 해주세요.</div>
        </div>
        <div className={classes.unnamed9}>
          <div className={classes.textBlock7}>여러분의 참여는 단지 후원이 아니라, </div>
          <div className={classes.textBlock8}>아이들에게 희망을 전하는 따뜻한 손길입니다.</div>
          <div className={classes.textBlock9}>캠페인에 동참해주셔서 감사합니다 .</div>
        </div>
        <div className={classes.presentedByGoodON}>presented by Good:ON</div>
        <div className={classes.unnamed10}>
          <div className={classes.textBlock10}>
            이 그립톡을 손에 쥘 때마다, 우리의 아이들이 보호받아야 할 권리를 기억해 주세요. 여러분의 관심과 응원이
            아이들의 권리를{' '}
          </div>
          <div className={classes.textBlock11}>지키는 소중한 힘이 됩니다.</div>
        </div>
        <div className={classes._32}>03</div>
        <div className={classes.alwaysByYourSidE}>always by your sidE:</div>
        <div className={classes.abys}>abys</div>
        <div className={classes.background}>Background</div>
        <div className={classes.ourProduct}>Our product</div>
        <div className={classes.toHappyWithChild}>To happy with child</div>
        <div className={classes.whyShouldWeDo}>
          <div className={classes.textBlock12}>Why should we</div>
          <div className={classes.textBlock13}> do?</div>
        </div>
        <div className={classes.whyShouldWeDo2}>Why should we do?</div>
        <div className={classes.whyShouldWeDo3}>Why should we do?</div>
      </div>
    </div>
  );
});
