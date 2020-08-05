import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';
import api from '../../services/api';

import './styles.css'

function TeacherList() {
  const [teachers, setTeachers] = useState([])

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    api.get('classes').then(response => {
      const { teachers } = response.data
      console.log("TeacherList -> response.data", response.data)
      console.log("TeacherList -> teachers", teachers)
      setTeachers(response.data)

    })
  }, [])

  async function searhTeachers(e: FormEvent) {
    e.preventDefault();
    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });
    setTeachers(response.data)

  }

  function loadTeacherList() {

  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os profs disponíveis.">
        <form id="search-teachers" onSubmit={searhTeachers}>

          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Português', label: 'Português' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Quimica', label: 'Quimica' },
              { value: 'Educação física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
            ]}
          />

          <Select
            name="week_day"
            label="MatéDia da semanaria"
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button type="submit">
            Buscar
            </button>
        </form>
      </PageHeader>

      <main>
        {
          teachers.map((teacher: Teacher) => {
            return <TeacherItem key={teacher.id} teacher={teacher} />
          })
        }
      </main>
    </div>
  )
}

export default TeacherList;