import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

function useArticleQuery({ article } = { article: null }) {
  const { slug } = useParams()

//   return useQuery(`/articles/${article ? article?.slug : slug}`, {
//     enabled: !!slug || !!article?.slug,
//     placeholderData: { article: {} },
//     initialData: article ? { article } : undefined,
//   })
    return [];
}

export default useArticleQuery