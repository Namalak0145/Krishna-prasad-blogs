import fs from 'node:fs';
import path from 'node:path';
const repository=process.env.GITHUB_REPOSITORY?.split('/')[1];
const base=process.env.BASE_PATH ?? (repository && !repository.endsWith('.github.io') ? '/' + repository + '/' : '/');
const files=fs.readdirSync('dist',{recursive:true}).filter(f=>typeof f==='string'&&f.endsWith('.html'));
let checked=0;
for(const file of files){const html=fs.readFileSync(path.join('dist',file),'utf8');if(html.includes('\ufffd'))throw new Error(`Encoding error: ${file}`);for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(!url.startsWith('/')||url.startsWith('//'))continue;const [pathname,hash]=url.split('#');if(!pathname.startsWith(base))throw new Error(`Wrong base in ${file}: ${url}`);const relative=pathname.slice(base.length);let target=path.join('dist',relative);if(fs.existsSync(target)&&fs.statSync(target).isDirectory())target=path.join(target,'index.html');if(!fs.existsSync(target))throw new Error(`Missing target: ${url}`);if(hash&&target.endsWith('.html')&&!fs.readFileSync(target,'utf8').includes(`id="${hash}"`))throw new Error(`Missing anchor: ${url}`);checked++;}}
console.log(`Verified ${files.length} static pages and ${checked} local links/assets at base ${base}`);
