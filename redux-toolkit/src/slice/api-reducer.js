import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:4000",
    }),
    endpoints(builder){
        return{
            fetchBreeds: builder.query({
                // 방식1
                query(limit = 10){
                    return `/menu?_page=1&_limit=${limit}`;
                },
                // 방식2
                // query: (limit1) => ({url: `/menu?_page=1&_limit=${limit1}`})
            })
        }
    }
})

export const {useFetchBreedsQuery} = apiSlice;


