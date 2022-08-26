import Prismic from '@prismicio/client'

export const repositoryName = process.env.PRISMIC_ENDPOINT;

export function getPrismicClient(req?: unknown) {
    const prismic = Prismic.client(
       repositoryName,
        {
            req,
            accessToken: process.env.PRISMIC_ACCESS_TOKEN
        }
    )

    return prismic;
}