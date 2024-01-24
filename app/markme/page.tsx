'use server';
import MarkMe from './markme'
import fs from 'fs'
import { postsDirectory } from '@/utils/marky';
import path from 'path';

export async function saveFile({filename, content}: {filename: string, content: string | undefined}) {
  'use server';
  const filepath = path.join(postsDirectory, (filename+'.md'))
  content = content || ''
  fs.writeFileSync(filepath, content)
}

export default async function Page() {
  return (<MarkMe/>)
}
