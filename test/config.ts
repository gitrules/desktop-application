import 'dotenv/config'

import { resolve } from 'path'

const user = {
  username: process.env['GH_USER']!,
  pat: process.env['GH_TOKEN']!,
}

const baseUrl = 'https://github.com'
const identityName = 'test-gitrules-identity'
const projectRepo = `${baseUrl}/${user.username}/test-gitrules-project-repo`
const communityUrl = `${projectRepo}-gov.public.git`
const privateCommunityUrl = `${projectRepo}-gov.private.git`
const publicRepo = `${baseUrl}/${user.username}/${identityName}-public.git`
const privateRepo = `${baseUrl}/${user.username}/${identityName}-private.git`

const configDir = resolve(__dirname, 'config')
const dbPath = resolve(configDir, 'gitrules.db')
const clientId = '912c0ab18e0f0b4a1abe'
export const config = {
  user,
  baseUrl,
  identityName,
  projectRepo,
  communityUrl,
  privateCommunityUrl,
  publicRepo,
  privateRepo,
  configDir,
  dbPath,
  clientId,
}
