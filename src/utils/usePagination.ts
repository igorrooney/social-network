import { useMemo, useState } from 'react'

const usePagination = (
  totalCount: number, 
  pageSize: number, 
  portionSize: number, 
  portion: number
) => {
  const [portionNumber, setPortionNumber] = useState(portion)

  const pages = useMemo(() => (
    Math.ceil(totalCount / pageSize)
  ), [totalCount, pageSize])

  const pagesCount = useMemo(() => {
    let pagesCountArr = []
    for (let i = 1; i <= pages; i++) {
      pagesCountArr.push(i)
    }
    return pagesCountArr
  }, [pages])

  const portionCount = useMemo(() => (
    Math.ceil(pages / portionSize)
  ), [portionSize, pages])

  const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  const rightPortionPageNumber = portionNumber * portionSize

  return [leftPortionPageNumber, rightPortionPageNumber, pagesCount, portionCount, portionNumber, setPortionNumber]
}

export default usePagination