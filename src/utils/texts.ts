import textsEs from '../assets/texts/texts-es.json';

export const getTexts = () => textsEs;

export const getText = (path: string): string => {
    const keys = path.split('.');
    let value: any = textsEs;

    for (const key of keys) {
        if (value && typeof value === 'object' && key in value) {
            value = value[key];
        } else {
            console.warn(`Text key not found: ${path}`);
            return path;
        }
    }

    return typeof value === 'string' ? value : path;
};
