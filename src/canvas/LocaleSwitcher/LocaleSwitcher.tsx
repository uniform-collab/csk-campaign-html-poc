import { FC, SVGProps, useCallback, MouseEvent } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { useComponentStarterKitContext } from '../../context/ComponentStarterKitContext';
import { LocaleSwitcherProps } from '.';

const Icon: FC<SVGProps<SVGSVGElement>> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    width="30"
    height="30"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
    />
  </svg>
);

const getLocaleEmoji = (inputString: string) => {
  const regex = /[\u{1F000}-\u{1FFFF}]|\p{Emoji}/gu;
  return inputString.match(regex)?.join('') || '';
};

export const LocaleSwitcher: FC<LocaleSwitcherProps> = ({ styles }) => {
  const [, setCookie] = useCookies();
  const { pathname, push, query, locale = 'en-US', locales, asPath } = useRouter();
  const { localizationSettings } = useComponentStarterKitContext();

  const { localeNames } = localizationSettings || {};
  const localeName = localeNames?.[locale] ?? '';

  const localeEmoji = getLocaleEmoji(localeName);

  const handleLocaleButtonClick = useCallback(
    async (e?: MouseEvent<HTMLButtonElement>) => {
      const selectedLocale = e?.currentTarget?.getAttribute('data-locale');
      if (selectedLocale) {
        setCookie('NEXT_LOCALE', selectedLocale);
        await push({ pathname, query }, asPath, { locale: selectedLocale });
        /*
          FixMe: This workaround addresses the issue related to locale change not being reflected inside the next context when running app locally.
          Our investigation revealed that the middleware is causing this problem. Upon removing the middleware, the locale change functions properly.
          Surprisingly, even when our middleware remains intact but the middleware matcher is removed, the locale change functions as expected.
          When deployed to Vercel, works fine
        */
        if (!process.env.NEXT_PUBLIC_VERCEL_URL) {
          window.location.reload();
        }
      }
    },
    [setCookie, push, pathname, query, asPath]
  );

  return (
    <>
      <div className="dropdown">
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label tabIndex={0} className={classNames('cursor-pointer relative', styles?.link)}>
          <Icon width={24} height={24} className={classNames(styles?.link, '!text-secondary')} />
          {localeEmoji && <span className="absolute -bottom-1 -right-1 text-sm">{localeEmoji}</span>}
        </label>
        <ul
          tabIndex={0}
          className={classNames(
            'menu menu-sm dropdown-content mt-5 z-[1000] p-2 shadow rounded-none bg-primary min-w-[200px] right-0 uppercase'
          )}
        >
          <p className="font-normal text-secondary uppercase text-center mb-2 mt-2 px-4">{localeName}</p>
          <div className="h-[1px] my-2 bg-secondary" />
          {locales
            ?.filter(l => l !== locale)
            .map(l => (
              <button
                key={l}
                data-locale={l}
                tabIndex={0}
                className={classNames('p-4', styles?.link)}
                onClick={handleLocaleButtonClick}
              >
                {localeNames?.[l]}
              </button>
            ))}
        </ul>
      </div>
    </>
  );
};
