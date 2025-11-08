import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: import.meta.env.SANITY_API_VERSION || '2024-01-31',
    useCdn: false,
    token: import.meta.env.SANITY_TOKEN,
    perspective:
        import.meta.env.DEV || import.meta.env.SANITY_PREVIEW_DRAFTS === 'true'
            ? 'drafts'
            : 'published'
});
