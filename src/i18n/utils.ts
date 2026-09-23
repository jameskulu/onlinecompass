import { ui, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
	const [, lang] = url.pathname.split('/');
	if (lang in ui) return lang as Lang;
	return defaultLang;
}

export function useTranslations(lang: Lang) {
	const localizedUI: Record<string, string> = ui[lang];
	return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
		return key in localizedUI ? localizedUI[key] : ui[defaultLang][key];
	};
}

export function localizePath(lang: Lang, path: string): string {
	if (lang === defaultLang) return path;
	return `/${lang}${path}`;
}
