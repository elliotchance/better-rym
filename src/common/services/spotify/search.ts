import { SearchFunction } from '..'
import { fetchJson } from '../../utils/fetch'
import { requestToken } from './auth'
import { AlbumSearchObject } from './codecs'

export const search: SearchFunction = async ({ artist, title }) => {
  const token = await requestToken()
  const response = await fetchJson(
    {
      url: 'https://api.spotify.com/v1/search',
      urlParams: { q: `${artist} ${title}`, type: 'album' },
      headers: { Authorization: `Bearer ${token.access_token}` },
    },
    AlbumSearchObject
  )
  return response.albums.items[0]?.external_urls.spotify
}
