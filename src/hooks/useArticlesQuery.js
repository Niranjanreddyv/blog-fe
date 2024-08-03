
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

const getCurrentUser = async () => {
    const {data} = await axios.get(`http://localhost:3001/api/articles/feed`);

    //console.log("getCurrentUser",{data});

    return data;
};

function useArticlesQuery() {
    const {
        isloading: isCurrentUserLoading,
        data: currentUser,
        error: currentUserError 
    } = useQuery({
        queryKey: ["currentUser"],
        queryFn: getCurrentUser,
        refetchOnWindowFocus:true,
        staleTime:0,
        cacheTime:0,

    });
  return {
    isCurrentUserLoading,
    currentUser,
    currentUserError,
  };
}

export default useArticlesQuery;