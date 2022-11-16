import React from 'react'
import './SearchPage.css'
import {  useStateValue } from "./StateProvider"
import UseGoogleSearch from './UseGoogleSearch'
import Response from './Response'


function SearchPage() {
const [{term} , dispatch] = useStateValue()


/*const { data } = UseGoogleSearch(term);*/


const data = Response; 
// console.log(data);

  return (
    <div className='searchPage'>
      <div className='SearchPage__header'>
      
       <h1>{term}</h1>
      </div>
  
        <div className='SearchPage__results'>


        </div>
    </div>
  )
}

export default SearchPage 