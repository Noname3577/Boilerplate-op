import '../openw/Save/Media.css';
import '../openw/Save/home.css';

import { useTranslations } from 'next-intl';

import { DemoBadge } from '@/components/DemoBadge';
import { AppConfig } from '@/utils/AppConfig';

import Header_top from '../openw/component_w/header_op/Header_op';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div>
      <div>
        <header className="header_a">
          <Header_top />
        </header>

        <main>{props.children}</main>

        <footer className=" bg-indigo-950 flex items-center justify-center border-t border-gray-300 py-3 text-center text-sm text-white">
          {`© Copyright ${new Date().getFullYear()} ${AppConfig.name}. ${t('made_with')} `}
          <a
            href="https://creativedesignsguru.com"
            className=" ml-2 hover:border-b-2 "
          >
            CreativeDesignsGuru
          </a>
          .
          <DemoBadge />
          {/*
           * PLEASE READ THIS SECTION
           * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
           * The link doesn't need to appear on every pages, one link on one page is enough.
           * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
           */}
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
