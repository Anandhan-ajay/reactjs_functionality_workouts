import React, { useState } from 'react'

function Pagination() {
    // const [listsOfData , setListsOfData] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50]);
    const [listsOfData, setListsOfData] = useState([
        "Aiden",
        "Olivia",
        "Noah",
        "Emma",
        "Liam",
        "Ava",
        "Ethan",
        "Sophia",
        "Mason",
        "Isabella",
        "Jacob",
        "Charlotte",
        "William",
        "Mia",
        "Michael",
        "Evelyn",
        "Benjamin",
        "Amelia",
        "Elijah",
        "Harper",
        "James",
        "Emily",
        "Alexander",
        "Abigail",
        "Daniel",
        "Sofia",
        "Logan",
        "Avery",
        "David",
        "Chloe",
        "Matthew",
        "Grace",
        "Joseph",
        "Layla",
        "Lucas",
        "Riley",
        "Samuel",
        "Aria",
        "Henry",
        "Zoe",
        "Jackson",
        "Lily",
        "Gabriel",
        "Ella",
        "Sebastian",
        "Anya"
      ]);

   const [currentPage, setCurrentPage] = useState(1);
   const [postPerPage , setPostPerPage] = useState(10);

   const indexOfLastPost = currentPage * postPerPage;
   const indexOfFirstPost = indexOfLastPost - postPerPage;

   const currentPost = listsOfData.slice(indexOfFirstPost, indexOfLastPost);
   const totalPages = Math.ceil(listsOfData.length / postPerPage);

   const paginate = (page) => setCurrentPage(page);
  return (
    <div>
        <h3>Pagination</h3>
        {/* <ul> */}
            {currentPost?.map((item,ind)=>{
                return(
                <div key={ind}>
                    <h5>{item}</h5>
                </div>
                )
            })}
            <button onClick={()=>paginate(1)}>First</button>
            <button disabled = {currentPage === totalPages} onClick={()=>paginate(currentPage + 1)}>Next</button> 
            {new Array(totalPages).fill(0).map((_,ind) =>{
                return(
                    <button key={ind + 1} onClick={() => paginate(ind + 1)}>
                        {ind + 1}
                    </button>
                )
            })}
            <button disabled = {currentPage === 1} onClick={()=>paginate(currentPage - 1)}>Previous</button>
            <button onClick={()=>paginate(totalPages)}>Last</button>
        {/* </ul> */}
    </div>
  )
}

export default Pagination

// import React, { useState } from 'react'

// function WorkoutsOne() {
//     const [arr , setArr] = useState(["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Fifteen","Eighteen","Nineeen","Twenty","Twenty one","Twenty two","Twenty three","Twenty four","Twenty five","Twenty six","Twenty seven","Twenty eight","Twentynine","Thirty","Thirty one","Thirty two","Thirty three","Thirty four","Thirty five","Thirty six","Thirty seven","Thirty eight","Thirty nine","Forty", "forty one","Forty two","Forty three","Forty four","Forty five","Forty six","Forty seven","Forty eight","Forty nine","Fiffty"]);

//     const [currentPage , setCurrentPage] =useState(1);
//     const [postPerPage , setPostPerPage] =useState(10);

//     const indexOfLastPost = currentPage * postPerPage;
//     const indexOfFirstPost = indexOfLastPost - postPerPage

//     const currentPageData = arr.slice(indexOfFirstPost,indexOfLastPost);
//     const totalPages = Math.ceil(arr.length / postPerPage);
//     console.log(totalPages , "totalPages");

//     const paginate = (page) => setCurrentPage(page)

//   return (
//     <div>
//         <h2>Simple pagination</h2>
//         {currentPageData?.map((item,ind)=>{
//             return(
//             <div key={ind}>
//                 <h5>{item}</h5>
//             </div>
//             )
//         })}
//         <button onClick={() =>paginate(1)}>First</button>
//         <button disabled = {currentPage == totalPages} onClick={()=>paginate(currentPage + 1)}>Next</button>
//         {new Array(totalPages).fill(0).map((_,ind)=>{
//             return <button key={ind + 1} onClick={()=> paginate(ind + 1)}>{ind + 1}</button>
//         })}
//         <button disabled = {currentPage == 1} onClick={()=>paginate(currentPage - 1)}>Previous</button>
//         <button onClick={() => paginate(totalPages)}>Last</button>
//     </div>
//   )
// }

// export default WorkoutsOne