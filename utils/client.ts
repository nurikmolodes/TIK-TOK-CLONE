import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'tnfttl8h',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: false,
  token: 'skBLlLIWXKPPJ8AL11k0o9596MCU7F93n73N4Tzj32lTsmdOF0Tz3bTRA95KOoQK2Esz4J09SOnS8HNMyC5OjWkVFKM9Jf1nu1MK6jYAqrPBjXlp9pbWXycUUevII3GBTccI7Rjgp38FhAbDHw03N3RWyMmHky9sqxAauVgqgpRIebDBF0et',
});
