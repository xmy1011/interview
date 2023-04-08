import { useEffect, useState } from 'react';
import jsonData from '../mock/sdutents.json';
import './index.css';

interface Stu {
  domicile: string; 
  id: number; 
  birthday: string; 
  gender: string; 
  grade: number; 
  status: string;
}

const Students = () => {

  
  const [stuData,setStudata] = useState<Stu[]>([]);

  useEffect(() => {
    setStudata(jsonData.data ?? [])
  },[])

  return (
    <div className='studentsContainer'>
      <div className='title'>Student List</div>
      <div className='content'>
        <div className='searchPanel'>
          <div className='single'>
            <div>Status</div>
            <select className='select'>
              <option value={'active'} key={1}>Active</option>
              <option value={'active2'} key={2}>Active2</option>
              <option value={'active3'} key={3}>Active3</option>
            </select>
          </div>
          <div className='single'>
            <div>Grade</div>
            <select className='select'>
              <option value={'all'} key={'all'}>ALL</option>
              <option value={'Chinese'} key={'ch'}>Chinese</option>
              <option value={'Math'} key={'math'}>Math</option>
            </select>
          </div>
          <div className='single'>
            <div>Name</div>
            <select className='select'>
              <option value={'all'} key={'all_name'}>All</option>
              <option value={'one'} key={'one'}>one</option>
              <option value={'two'} key={'two'}>two</option>
            </select>
          </div> 
          <button>Reset</button>
          <select className='noneborderSelect'>
            <option value={'more1'} key={'more1'}>More filters</option>
            <option value={'more2'} key={'more2'}>More filters2</option>
          </select>
        </div>
        <table id='mytable'>
          <caption>
            <strong>Results(230 in total)</strong>
            <div>
              <button>Download Results</button>
              <button>Add New</button>
            </div>
          </caption>
          <thead>
            <tr>
              <th>Domicile</th>
              <th>ID</th>
              <th>Birthday</th>
              <th>Gender</th>
              <th>Grade</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              stuData.map((item) => {
                return (
                  <tr>
                    <td>{item?.domicile}</td>
                    <td>{item?.id}</td>
                    <td>{item?.birthday}</td>
                    <td>{item?.gender}</td>
                    <td>{item?.grade}</td>
                    <td>{item?.status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Students;