import { Block } from 'notion-types'
import { defaultMapImageUrl } from 'react-notion-x'

import { defaultPageIcon, defaultPageCover } from './config'

export const mapImageUrl = (url: string, block: Block) => {
  if (!url || url === 'null') {
    // Fallback to default icon for null/empty URLs
    return defaultPageIcon || '/icon.png'
  }
  
  if (url === defaultPageCover || url === defaultPageIcon) {
    return url
  }

  return defaultMapImageUrl(url, block)
}
