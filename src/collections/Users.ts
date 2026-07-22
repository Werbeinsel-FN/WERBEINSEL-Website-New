import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  labels: { singular: 'Benutzer', plural: 'Benutzer' },
  admin: { useAsTitle: 'email', group: 'System' },
  fields: [
    { name: 'name', type: 'text', label: 'Name' },
    {
      name: 'rolle', type: 'select', label: 'Rolle', defaultValue: 'editor',
      options: [
        { label: 'Admin (Vollzugriff)', value: 'admin' },
        { label: 'Redakteur (nur Inhalte)', value: 'editor' },
      ],
    },
  ],
}
