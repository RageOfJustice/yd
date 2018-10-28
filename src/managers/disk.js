import * as R from 'ramda'
import axios from 'axios'
import { getYDHeaders, createURL } from '../api'
import { renameKeys } from '../utils'

export const getDiskInfo = token =>
  axios.get(createURL('disk'), { headers: getYDHeaders(token) }).then(
    R.pipe(
      R.prop('data'),
      renameKeys({
        trash_size: 'trashSize',
        total_space: 'totalSpace',
        used_space: 'usedSpace',
        system_folders: 'systemFolders',
      }),
    ),
  )
