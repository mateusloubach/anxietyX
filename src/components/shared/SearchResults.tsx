import { Models } from 'appwrite'
import Loader from './Loader'
import GridPostList from './GridPostList'
import React from 'react';


type SearchResultsProps = {
  isSearchFetching: boolean;
  searchedPosts: Models.Document[]
}

const SearchResults = ({isSearchFetching, searchedPosts}: SearchResultsProps) => {
  if(isSearchFetching) return <Loader />

    if(searchedPosts && searchedPosts.documents.length > 0) { 
      return (
      <GridPostList posts={searchedPosts.documents}/>
    )
  }

  return (
    <div>
      <p className='text-light-4 mt-10 text-center w-full'>No Result Found</p>
    </div>
  )
}

export default SearchResults