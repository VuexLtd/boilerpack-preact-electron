import { parse } from 'querystring';

import './index.scss';

declare var System: {
    import(path: string): Promise<any>;
    import<T>(path: string): Promise<T>;
}

interface EntryModule {
    main(): void;
}

async function loadEntry(entry: string) {
    const module = await System.import<EntryModule>(`./${entry}/index`);
    module.main();
}

const query = parse<{ module: string }>(location.search.slice(1));

if (!query.module) {
    throw new Error('Missing ?module query parameter');
}

loadEntry(query.module);
