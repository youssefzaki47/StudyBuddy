import { useState, useEffect } from 'react';
import axios from 'axios';
import TaskItem from '../components/TaskItem';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/tasks', {
        headers: { 'x-auth-token': token }
      });
      setTasks(res.data);
    } catch (err) {
      setError('Failed to load tasks');
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async (e) => {
    e.preventDefault();
    if (!text) return;
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', { text }, { headers: { 'x-auth-token': token } });
      setTasks([...tasks, res.data]);
      setText('');
    } catch (err) {
      setError('Failed to add task');
    }
  };

  const toggleTask = async (id) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/tasks/${id}`, {}, { headers: { 'x-auth-token': token } });
      setTasks(tasks.map(t => t._id === id ? res.data : t));
    } catch (err) {
      setError('Failed to update task');
    }
  };

  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, { headers: { 'x-auth-token': token } });
      setTasks(tasks.filter(t => t._id !== id));
    } catch (err) {
      setError('Failed to delete task');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto' }}>
      <h2>Dashboard</h2>
      <button onClick={logout} style={{ marginBottom: '10px' }}>Logout</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={addTask}>
        <input type="text" placeholder="Add new task" value={text} onChange={e => setText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        {tasks.length === 0 ? <p>No tasks yet</p> :
          tasks.map(task => (
            <TaskItem key={task._id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
          ))
        }
      </div>
    </div>
  );
}

export default Dashboard;
