// lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: '30c78bkb',     // lo encuentras en sanity.config.ts
  dataset: 'production',          // o el nombre que estés usando
  apiVersion: '2023-01-01',       // fecha de la versión de la API
  useCdn: true,                   // true = caché rápida (solo lectura)
});
