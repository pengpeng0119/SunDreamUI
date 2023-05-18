import { FC, useEffect, useState } from 'react'

export interface PageProps {
  currentPage?: number //当前页码
  groupCount?: number //页码分组，显示7个页码，其余用省略号显示
  startPage?: number //分组开始页码
  totalPage?: number //总页数
  pageCallbackFn?: (current: number) => void
}
const Page: FC<PageProps> = (props) => {
  const {
    currentPage = 1,
    groupCount = 5,
    startPage = 1,
    totalPage = 12,
    pageCallbackFn
  } = props
  const [varStartPage, setVarStartPage] = useState(startPage)
  const [varCurrentPage, setVarCurrentPage] = useState(currentPage)
  useEffect(() => {
    if (pageCallbackFn) pageCallbackFn(varCurrentPage)
  }, [setVarCurrentPage])
  const createPage = () => {
    let pages = []
    //上一页
    pages.push(
      <li
        className={varCurrentPage === 1 ? 'nomore' : ''}
        onClick={prePageHandeler}
        key={0}
      >
        上一页
      </li>
    )
    if (totalPage <= 10) {
      /*总页码小于等于10时，全部显示出来*/
      for (let i = 1; i <= totalPage; i++) {
        pages.push(
          <li
            key={i}
            onClick={(e) => pageClick(i)}
            className={varCurrentPage === i ? 'activePage' : ''}
          >
            {i}
          </li>
        )
      }
    } else {
      // 页码大于10
      pages.push(
        <li
          className={varCurrentPage === 1 ? 'activePage' : ''}
          key={1}
          onClick={(e) => pageClick(1)}
        >
          1
        </li>
      )
      let pageLength = 0
      if (groupCount + varStartPage > totalPage) {
        pageLength = totalPage
      } else {
        pageLength = groupCount + varStartPage
      }
      if (varCurrentPage >= groupCount) {
        pages.push(
          <li className="" key={-1}>
            ···
          </li>
        )
      }
      //非第一页和最后一页显示
      for (let i = varStartPage; i < pageLength; i++) {
        if (i <= totalPage - 1 && i > 1) {
          pages.push(
            <li
              className={varCurrentPage === i ? 'activePage' : ''}
              key={i}
              onClick={(e) => pageClick(i)}
            >
              {i}
            </li>
          )
        }
      }
      //后面省略号
      if (totalPage - varStartPage >= groupCount + 1) {
        pages.push(
          <li className="" key={-2}>
            ···
          </li>
        )
      }
      //最后一页
      pages.push(
        <li
          className={varCurrentPage === totalPage ? 'activePage' : ''}
          key={totalPage}
          onClick={(e) => pageClick(totalPage)}
        >
          {totalPage}
        </li>
      )
    }
    pages.push(
      <li
        className={varCurrentPage === totalPage ? 'nomore' : ''}
        onClick={nextPageHandeler}
        key={totalPage + 1}
      >
        下一页
      </li>
    )
    return pages
  }
  //页码点击
  function pageClick(currentPage: number) {
    const getCurrentPage = pageCallbackFn
    //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
    if (currentPage >= groupCount) {
      // this.setState({
      //     startPage: currentPage - 2,
      // })
      setVarStartPage(currentPage - 2)
    }
    if (currentPage < groupCount) {
      // this.setState({
      //     startPage: 1,
      // })
      setVarStartPage(1)
    }
    //第一页时重新设置分组的起始页
    if (currentPage === 1) {
      // this.setState({
      //     startPage: 1,
      // })
      setVarStartPage(1)
    }
    // this.setState({
    //     currentPage
    // })
    setVarCurrentPage(currentPage)
    //将当前页码返回父组件
    if (getCurrentPage) getCurrentPage(currentPage)
  }

  //上一页事件
  function prePageHandeler() {
    if (varCurrentPage === 1) {
      return false
    }
    setVarCurrentPage(varCurrentPage - 1)
    pageClick(varCurrentPage - 1)
  }

  //下一页事件
  function nextPageHandeler() {
    // const {totalPage} = this.props.pageConfig;
    // if (++currentPage > totalPage) {
    //     return false
    // }
    // pageClick(currentPage)
    if (varCurrentPage + 1 >= totalPage) {
      return false
    }
    setVarCurrentPage(varCurrentPage + 1)
    pageClick(varCurrentPage + 1)
  }
  return <ul className="page-container">{createPage()}</ul>
}

export default Page
