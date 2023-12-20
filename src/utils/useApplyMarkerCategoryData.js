import { useEffect, useState } from "react"

const useApplyMarkerCategoryData=()=>{
    const [applyMakerData , setApplyMakerData]=useState()

    useEffect(()=>{
        getuseApplyMarkerCategoryData()
    },[])

    async function getuseApplyMarkerCategoryData(){
        const data = await fetch('http://localhost/wordpress/gold/wp-json/wpgmp/v1/marker_categories')
        const json = await data.json()
        // console.log('getuseApplyMarkerCategoryData  json data ',json.marker_category_obj)
        setApplyMakerData(json)
    }
    return applyMakerData;
}
export default useApplyMarkerCategoryData