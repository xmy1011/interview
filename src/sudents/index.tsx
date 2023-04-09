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

type status = 'Active' | 'no_Active' | 'all';
type grade = 1 | 2 | 'all';
type name = 'zhang,san' | 'li,si' | 'wang' | 'all';



const Students = () => {

  
  const [stuData,setStudata] = useState<Stu[]>([]);
  // 升降序排列id 默认升序
  const [idSort,setIdSort] = useState<"desc"| "acs">('acs');
  //  处理 Status 筛选
  const [statusFilter, setStatusFilter] = useState<status>("all")
  //  处理 Grade 筛选
  const [gradeFilter, setGradeFilter] = useState<grade>("all")
  //  处理 Name 筛选 
  const [nameFilter, setNameFilter] = useState<name>("all")

  useEffect(() => {
    setStudata(jsonData.data)
  },[])

  // 处理 Id 排序
  const handleIdSort = () => {
    if(idSort === "acs"){
      // 对其做降序排列
      const descSort = [...stuData].sort((item1, item2) => item2.id - item1.id);
      setStudata(descSort);
      setIdSort('desc');
    } else {
      // 对其做升序排列
      const acsSort = [...stuData].sort((item1, item2) => item1.id - item2.id);
      setStudata(acsSort);
      setIdSort('acs');
    }
  }

  // 处理三个筛选条件
  useEffect(() => {
    if(statusFilter === 'all' && gradeFilter === 'all' && nameFilter === 'all'){
      setStudata(jsonData.data);
    } else {
      let newData = [...jsonData.data]
        .filter((item) => statusFilter === 'all' ? true : item.status === statusFilter)
        .filter((item) => gradeFilter === 'all' ? true : item.grade.toString() === gradeFilter.toString())
        .filter((item) => nameFilter === 'all' ? true : item.domicile === nameFilter);
      setStudata(newData);
    }
  }, [statusFilter, gradeFilter, nameFilter]);


  return (
    <div className='studentsContainer'>
      <div className='title'>Student List</div>
      <div className='content'>
          <form className='searchPanel'
           onChange={(e ) => {
            const target = e.target as HTMLSelectElement;
            if(target.name === 'status'){
              setStatusFilter(target.value as status);
            }else if(target.name === 'grade'){
              setGradeFilter(target.value as grade);
            }else if(target.name === 'name'){
              setNameFilter(target.value as name);
            }
            }}
            onReset={() => {
              setStatusFilter('all');
              setGradeFilter('all');
              setNameFilter("all");
            }}
          >
            <div className='single'>
              <div>Status</div>
              <select className='select'  name="status" value={statusFilter}>
                <option value={'all'} key={'all_status'}>ALL</option>
                <option value={'Active'} key={"Active"}>Active</option>
                <option value={'no_Active'} key={"no_Active"}>no_Active</option>
              </select>
            </div>
            <div className='single'>
              <div>Grade</div>
              <select className='select' name="grade" value={gradeFilter}>
                <option value={'all'} key={'all_grage'}>ALL</option>
                <option value={1} key={1}>1</option>
                <option value={2} key={2}>2</option>
                <option value={3} key={3}>3</option>
              </select>
            </div>
            <div className='single'>
              <div>Name</div>
              <select className='select' name="name" value={nameFilter}>
                <option value={'all'} key={'all_name'}>ALL</option>
                <option value={'zhang,san'} key={'zhang,san'}>zhang,san</option>
                <option value={'li,si'} key={'li,si'}>li,si</option>
                <option value={'wang'} key={'wang'}>wang</option>
              </select>
            </div> 
            <button type='reset'>Reset</button>
            <select className='noneborderSelect'>
              <option value={'more1'} key={'more1'}>More filters</option>
              <option value={'more2'} key={'more2'}>More filters2</option>
            </select>
          </form>
        <table id='mytable' cellPadding={0} cellSpacing={0}>
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
              <th data-sort-type="number">
                ID 
                <div className='filter' onClick={handleIdSort}></div>
              </th>
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