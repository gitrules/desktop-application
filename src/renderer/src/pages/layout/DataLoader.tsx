import { FC, useEffect } from 'react'

import { serialAsync } from '~/shared'

import { useDataStore } from '../../store/store.js'

export const DataLoader: FC = function DataLoader() {
  const getUser = useDataStore((s) => s.userInfo.fetchUser)
  const getCommunities = useDataStore((s) => s.communityInfo.fetchCommunities)
  const checkForUpdates = useDataStore((s) => s.checkForUpdates)
  const refreshCache = useDataStore((s) => s.refreshCache)
  const motionSearchArgs = useDataStore((s) => s.motionInfo.searchArgs)
  const fetchMotions = useDataStore((s) => s.motionInfo.fetchMotions)
  const communityToManage = useDataStore(
    (s) => s.communityManage.communityToManage,
  )
  const fetchCommunityUsers = useDataStore(
    (s) => s.communityManage.fetchCommunityUsers,
  )
  const fetchCommunityIssues = useDataStore(
    (s) => s.communityManage.fetchCommunityIssues,
  )
  const fetchCommunityPrs = useDataStore(
    (s) => s.communityManage.fetchCommunityPullRequests,
  )

  useEffect(() => {
    let shouldUpdate = true
    async function run() {
      await fetchMotions(motionSearchArgs, false, false, () => shouldUpdate)
    }
    void run()

    return () => {
      shouldUpdate = false
    }
  }, [motionSearchArgs, fetchMotions])

  useEffect(() => {
    async function run() {
      await Promise.allSettled([getUser(false), getCommunities(false)])
    }
    void run()
  }, [getUser, getCommunities])

  useEffect(() => {
    let shouldUpdate = true

    async function run() {
      if (communityToManage != null) {
        await Promise.allSettled([
          fetchCommunityUsers(communityToManage, false, () => shouldUpdate),
          fetchCommunityIssues(communityToManage, false, () => shouldUpdate),
          fetchCommunityPrs(communityToManage, false, () => shouldUpdate),
        ])
      }
    }

    void run()

    return () => {
      shouldUpdate = false
    }
  }, [
    communityToManage,
    fetchCommunityUsers,
    fetchCommunityIssues,
    fetchCommunityPrs,
  ])

  useEffect(() => {
    // void refreshCache()
    const updateCacheInterval = setInterval(
      serialAsync(async () => {
        await refreshCache()
      }),
      60 * 1000,
    )
    return () => {
      clearInterval(updateCacheInterval)
    }
  }, [refreshCache])

  useEffect(() => {
    void checkForUpdates()
    const checkForUpdatesInterval = setInterval(async () => {
      return await checkForUpdates()
    }, 60 * 1000)
    return () => {
      clearInterval(checkForUpdatesInterval)
    }
  }, [checkForUpdates])

  return <></>
}
