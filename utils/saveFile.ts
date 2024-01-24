'use server';

import fs from 'fs'
import path from 'path';
import { postsDirectory } from './marky';

export async function saveFile({filename, content}: {filename: string, content: string | undefined}) {
  'use server';
  const filepath = path.join(postsDirectory, (filename+'.md'))
  content = content || ''
  fs.writeFileSync(filepath, content)
}
