import fs from 'fs'
import path from 'path'
import {promisify} from 'util'
import { headers } from '../../lib'

export default function (options) {
  const { logger, basedir } = options
  const readDir = promisify(fs.readdir)

  var mime = {
    html: 'text/html',
    txt: 'text/plain',
    css: 'text/css',
    gif: 'image/gif',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml',
    js: 'application/javascript',
    mp3: 'audio/mpeg',
    wav: 'audio/wav'
  }

  return {
    all: async function (req, res) {
      let results, status, message, response

      options.startTime = Date.now()

      try {
        results = await readDir(path.join(basedir, 'public', 'files'))
        status = 'success'
        message = `Directory contains ${results.length} files...`
      } catch (err) {
        status = 'error'
        message = err.message
        logger.error(message)
      }

      response = { results, status, message }

      res.format({
        json: () => {
          res.set(headers(response, options))
            .status(200)
            .write(JSON.stringify(response))

          res.end()
        }
      })
    },

    one: async function (req, res) {
      res.format({
        html: () => {
          const file = path.join(basedir, 'public', 'files', req.params.id)
          var type = mime[path.extname(file).slice(1)] || 'text/plain'
          let stream = fs.createReadStream(file)

          stream.on('open', () => {
            res.set({
              'Content-Type': type
              // 'Content-Length': Buffer.byteLength(JSON.stringify(res))
            })

            stream.pipe(res)
          })
        }
      })
    }
  }
}
