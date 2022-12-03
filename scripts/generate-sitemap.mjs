import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.json');
  const pages = await globby(['pages/*.js', '!pages/_*.js', '!pages/404.js']);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

        <url>
            <loc>https://andysahlstrom.com/instruments</loc>
        </url>

        <url>
            <loc>https://andysahlstrom.com/sculptures</loc>
        </url>
        
        <url>
            <loc>https://andysahlstrom.com/timelapse</loc>
        </url>
            ${pages
              .map((page) => {
                const path = page.replace('pages', '').replace('.js', '');
                const route = path === '/index' ? '' : path;

                return `
                    <url>
                        <loc>${`https://andysahlstrom.com${route}`}</loc>
                    </url>
                    `;
              })
              .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  writeFileSync('public/sitemap.xml', formatted);
}

generate();
