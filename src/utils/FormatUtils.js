// import { CLIENT_ID } from '../constants/Config';

export function formatSongTitle (str) {
  if (!str.title) {
    return ''
  }
  const arr = str.title.replace('–', '-').split(' - ')
  str.title = arr[arr.length - 1].split(' (')[0]
}
