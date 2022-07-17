import { useEffect } from 'react'
import UserItem from '../../components/UserItem'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { fetchUsers } from '../../store/slices/usersSlice/usersAction'

const UsersPage = () => {
  const dispatch = useAppDispatch()
  const { items, totalCount } = useAppSelector((state) => state.users)

  const querryParams = {
    count: 10,
    page: 1,
  }

  useEffect(() => {
    dispatch(fetchUsers(querryParams))
  }, [])

  return (
    <>
      Users List
      <ul>
        {items.map((el) => (
          <UserItem
            key={el.id}
            followed={el.followed}
            name={el.name}
            photo={el.photos.small}
            status={el.status}
          />
        ))}
      </ul>
      {/* <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      /> */}
    </>
  )
}

export default UsersPage
