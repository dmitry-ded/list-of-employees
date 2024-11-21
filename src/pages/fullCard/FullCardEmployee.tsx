import { Link, useNavigate, useParams } from 'react-router-dom'
import "./fullCardEmployee.css"
import { useEffect, useState } from 'react'
import axios from 'axios'
import emptyProfile from "../../assets/img/emptyProfile.png"
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

type FullCardEmployeeState = {
  id: string,
  firstName: string,
  lastName: string,
  middleName: string,
  birthDate: string,
  departament: string,
  post: string,
  salary: number,
  photo: string,
}

type FullCardEmployeeParams = {
  id: string,
}

const FullCardEmployee: React.FC = () => {


  const { id } = useParams<FullCardEmployeeParams>();

  const navigate = useNavigate();


  const [emplo, setEmplo] = useState<FullCardEmployeeState>({
    id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    birthDate: "",
    departament: "",
    post: "",
    salary: 0,
    photo: "",
  })

  useEffect(() => {
    async function fetchFullEmpl() {
      try {
        const { data } = await axios.get(`https://673e4c9e0118dbfe860adc0c.mockapi.io/items/` + id);
        setEmplo(data);
      } catch (error) {
        navigate("/");
      }
    }

    fetchFullEmpl();
  }, [])

  const birthDate = emplo.birthDate || "1970-01-01T00:00:00.000Z";
  const formattedDate = format(new Date(birthDate), "yyyy.MM.dd HH:mm:ss.SSS", { locale: ru});

  return (
    <div className='main-full-card'>
      <div className="descriptions-employee-full-card">
        <div className="description-full-card-img">
          {
            emplo.photo ? (<img src={emplo.photo} alt="" />) : (<img src={emptyProfile} alt="" />)
          }
        </div>
        <div className="info-full-card">
          <div className="info-name-card">
            <strong>Ф.И.О: </strong>
            <span>{emplo.lastName}</span>
            <span>{emplo.firstName}</span>
            <span>{emplo.middleName}</span>
          </div>
          <div className="date-of-birth">
            <span><strong>Дата Рождения: </strong>{formattedDate}</span>
          </div>
          <div className="departament-post-block">
            <span><strong>Депортамент: </strong>{emplo.departament}</span>
            <span><strong>Должность: </strong>{emplo.post}</span>
          </div>
        </div>
        <Link to="/" style={{color: "black"}}>Вернуться назад</Link>
      </div>
    </div>
  )
}

export default FullCardEmployee
