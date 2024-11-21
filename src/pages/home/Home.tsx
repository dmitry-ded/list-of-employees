import React, { useEffect } from 'react'
import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import { fetchEmployees, selectEmployeesData } from '../../redux/slices/employeeSlice'
import "./home.css"
import CardEmployee from '../../components/cardEmployee/CardEmployee'
import Pagination from '../../components/pagination/Pagination'
import { selectCurrentPage, setCurrentPage } from '../../redux/slices/searchSlice'
import Search from '../../components/search/Search'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {


  const dispatch = useAppDispatch()
  const { employees, status } = useSelector(selectEmployeesData);
  const { currentPage, searchValue } = useSelector(selectCurrentPage);
  

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num))
  };

  useEffect(() => {
    dispatch(fetchEmployees({currentPage: currentPage}))
  }, [currentPage])

  const items = employees.filter((el) => {
    if (el.firstName.toLowerCase().includes(searchValue.toLowerCase()) || el.lastName.toLowerCase().includes(searchValue.toLowerCase()) || el.middleName.toLowerCase().includes(searchValue.toLowerCase())) {
      return true
    }
    return false
  }).map((el) => (
    <Link to={`/employee/${el.id}`} style={{color: "black"}}><CardEmployee key={el.id} {...el} /></Link>))
  

  return (
    <div className="main-home">
      <div className='main-block-card'>
        <Search />
        <div className="block-card">
          {
            status === 'error'
            ?(<div>Произошла ошибка</div>)
            :
              (
                <>
                  {
                    status === 'loading'
                    ? (<h1>Загрузка</h1>)
                    : items
                  }
                </>
              )
          }
        </div>
        <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
      </div>
    </div>
  )
}

export default Home
