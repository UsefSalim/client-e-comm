import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Test(){
const fetchData = async () =>
{
  try
  {
    const res = await axios.get('https://ucefecommerceapi.herokuapp.com/api/tests');
    const currentDta = Array.from(res.data).map((elements) =>
    {
      return { ...elements };
    });
    setKeys(Object.keys(currentDta[0]));
    setTodos(currentDta);

  } catch (error)
  {
    console.log(error);
  }
}
  const [todos, setTodos] = useState([]);
  const [keys, setKeys] = useState([]);

  useEffect(() => { fetchData() }, []);
  return (
    <>
      <thead>
        <tr>
          {keys.map((keys) => (
            <th>{keys}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((data, index) => (
          <tr>
            <td>{index + 1}</td>
            {keys.map((key) =>
            {
              if (key !== '_id') return <td>{`${data[key]}`}</td>
            })}
          </tr>
        ))}
      </tbody>
    </ >
  )
}
export default Test;
