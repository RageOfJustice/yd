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
        max_file_size: 'maxFileSize',
      }),
    ),
  )

export const getMetadata = ({ token, fields, path }) =>
  axios
    .get(
      createURL(
        `disk/resources?&path=disk:/${path ? path : ''}${
          fields ? '&' + fields : ''
        }`,
      ),
      { headers: getYDHeaders(token) },
    )
    .then(R.prop('data'))

export const removeFile = ({ token, fields, path }) =>
  axios
    .delete(
      createURL(
        `disk/resources?&path=disk:/${path ? path : ''}${
          fields ? '&' + fields : ''
        }`,
      ),
      { headers: getYDHeaders(token) },
    )
    .then(R.prop('data'))
