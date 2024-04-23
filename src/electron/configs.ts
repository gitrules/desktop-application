import { resolve } from 'node:path'

import * as pkgJson from '../../package.json'
import { toResolvedPath } from './lib/paths.js'

export const CONFIG_PATH = toResolvedPath(
  process.env['GITRULES_CONFIG_PATH'] ?? '~/.gitrules',
)
export const DB_PATH = toResolvedPath(
  process.env['GITRULES_DB_PATH'] ?? resolve(CONFIG_PATH, 'gitrules.db'),
)

export const COMMUNITY_REPO_NAME =
  process.env['GITRULES_COMMUNITY_REPO_NAME'] ?? 'gitrules-identity'

export const GITHUB_OAUTH_CLIENT_ID = '21a24c7b897cb2509682'

export const CLI_VERSION = pkgJson['dependencies']['@gitrules/js-client']
// export const CLI_VERSION = '0.0.1'
