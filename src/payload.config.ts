import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pages } from './collections/Pages'
import { Referenzen } from './collections/Referenzen'
import { Leistungen } from './collections/Leistungen'
import { Jobs } from './collections/Jobs'
import { Testimonials } from './collections/Testimonials'
import { Kundenlogos } from './collections/Kundenlogos'
import { Anfragen } from './collections/Anfragen'
import { Einstellungen } from './globals/Einstellungen'
import { Footer } from './globals/Footer'
import { Navigation } from './globals/Navigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const blobToken = process.env.BLOB_READ_WRITE_TOKEN

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pages,
    Referenzen,
    Leistungen,
    Jobs,
    Testimonials,
    Kundenlogos,
    Anfragen,
  ],
  globals: [Einstellungen, Footer, Navigation],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins: [
    ...(blobToken
      ? [
          vercelBlobStorage({
            collections: { media: true },
            token: blobToken,
          }),
        ]
      : []),
  ],
})
