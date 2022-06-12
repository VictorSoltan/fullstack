// export function createPages(pages, pagesCount, currentPage) {
//     if(pagesCount > 5) {
//         if(currentPage > 2) {
//
//
//             if(currentPage < pagesCount - 2){
//                 for (let i = currentPage-1; i <= pagesCount; i++) {
//                     if (i == currentPage - 1 || i == currentPage || i == pagesCount || i == currentPage - 1 || i == pagesCount - 1 || i == pagesCount - 2)
//                         pages.push(i)
//
//                     if (i == pagesCount) break
//
//                 }
//             } else if(currentPage == pagesCount - 2){
//                 for (let i = currentPage - 2; i <= pagesCount; i++) {
//                     pages.push(i)
//                     if (i == pagesCount) break
//
//                 }
//             } else if (currentPage == pagesCount -1) {
//                 for (let i = currentPage - 3; i <= pagesCount; i++) {
//                     pages.push(i)
//                     if (i == pagesCount) break
//
//                 }
//             } else if (currentPage == pagesCount) {
//                 for (let i = currentPage - 4; i <= pagesCount; i++) {
//                     pages.push(i)
//                     if (i == pagesCount) break
//
//                 }
//             }
//         }
//         else {
//             for (let i = 1; i <= pagesCount; i++) {
//                 if(i == 1 || i== 2 || i == pagesCount || i == pagesCount -1 || i == pagesCount -2)
//                     pages.push(i)
//                 if(i == pagesCount) break
//             }
//         }
//     }  else {
//         for (let i = 1; i <= pagesCount; i++) {
//             pages.push(i)
//         }
//     }
// }
