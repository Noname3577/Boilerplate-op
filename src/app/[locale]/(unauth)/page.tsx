/* eslint-disable tailwindcss/no-custom-classname */
import '../../../openw/Save/home.css';
import '../../../openw/Save/Media.css';

import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import Bd_a from '../../../openw/component_w/Bd_a/Bd_a';
import Bd_b from '../../../openw/component_w/Bd_b/Bd_b';
import Bd_c from '../../../openw/component_w/Bd_c/Bd_c';
import Bd_e from '../../../openw/component_w/Bd_c/Bd_e';
import GsapSlider from '../../../openw/component_w/ui/GsapSlider/GsapSlider';
import GsapSlider_b from '../../../openw/component_w/ui/GsapSlider_b/GsapSlider_b';
import Loader from '../../../openw/component_w/ui/Loader/Loader';
import Manage from '../../../openw/component_w/ui/Manage/Manage';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index(props: { params: { locale: string } }) {
  unstable_setRequestLocale(props.params.locale);
  // const t = useTranslations('Index');

  return (
    <>
      <div className="body_a">
        <div className="bd_a">
          <Bd_a />
        </div>
        <div className="Slider_body">
          <GsapSlider />
        </div>
      </div>
      <div className="textheaderbg">
        <h1>Pantip Realtime</h1>
        <span>กระทู้ที่มีคนเปิดอ่านมากในขณะนี้ อัปเดตทุกนาที</span>
      </div>
      <div className="body_b">
        <GsapSlider_b />
      </div>
      <div className="body_c">
        <Bd_b />
      </div>
      <div className="body_e">
        <div>
          <div>
            <Bd_c />
          </div>
          <div>
            <Loader />
          </div>
        </div>
        <div className="datain">
          <div>
            <Manage />
          </div>
          <div className="okbg_e">
            <Bd_e />
          </div>
        </div>
      </div>
    </>
  );
}
