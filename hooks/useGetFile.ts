import { postsDirectory } from "@/utils/marky"
import matter from "gray-matter"
import fs from "fs"
import path from "path"

export default function useGetFile(fileId: string) {
  const filePath = path.join(postsDirectory, fileId) + ".md"
}
