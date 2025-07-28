import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { CheckCircle, Circle, Trash2, PlusCircle, Loader2 } from 'lucide-react';

interface Todo {
  id: string;
  task: string;
  is_complete: boolean;
  created_at: string;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const { data, error } = await supabase
        .from('todos')
        .select('*')
        .order('created_at', { ascending: true });

      if (error) throw error;
      setTodos(data || []);
    } catch (err) {
      console.error('Erreur lors du chargement des tâches:', err);
      setError('Impossible de charger les tâches. Vérifiez votre connexion Supabase et la configuration de la table.');
      setTodos([]);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;

    try {
      const { error } = await supabase
        .from('todos')
        .insert([{ task: newTask.trim() }]);

      if (error) throw error;
      setNewTask('');
      getTodos();
    } catch (err) {
      console.error('Erreur lors de l\'ajout de la tâche:', err);
      setError('Impossible d\'ajouter la tâche.');
    }
  };

  const toggleComplete = async (id: string, is_complete: boolean) => {
    try {
      const { error } = await supabase
        .from('todos')
        .update({ is_complete: !is_complete })
        .eq('id', id);

      if (error) throw error;
      getTodos();
    } catch (err) {
      console.error('Erreur lors de la mise à jour de la tâche:', err);
      setError('Impossible de mettre à jour la tâche.');
    }
  };

  const deleteTask = async (id: string) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id);

      if (error) throw error;
      getTodos();
    } catch (err) {
      console.error('Erreur lors de la suppression de la tâche:', err);
      setError('Impossible de supprimer la tâche.');
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500 mb-4" />
        <p className="text-gray-600">Chargement des tâches...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
        Ma Liste de Tâches
      </h2>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
          <p className="text-red-800 text-sm">
            <span className="font-semibold">Erreur:</span> {error}
          </p>
        </div>
      )}

      <form onSubmit={addTodo} className="flex mb-6">
        <input
          type="text"
          placeholder="Ajouter une nouvelle tâche..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-r-lg hover:bg-blue-700 flex items-center justify-center transition-colors"
        >
          <PlusCircle className="w-5 h-5 mr-2" />
          Ajouter
        </button>
      </form>

      {todos.length === 0 ? (
        <div className="flex items-center justify-center h-32 text-gray-500">
          <div className="text-center">
            <CheckCircle className="w-12 h-12 mx-auto mb-2 text-gray-300" />
            <p>Aucune tâche pour le moment</p>
            <p className="text-sm">Ajoutez-en une ci-dessus !</p>
          </div>
        </div>
      ) : (
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center bg-gray-50 rounded-lg p-3 shadow-sm border border-gray-200"
            >
              <button
                onClick={() => toggleComplete(todo.id, todo.is_complete)}
                className="flex-shrink-0 mr-3 text-gray-400 hover:text-green-500 transition-colors"
              >
                {todo.is_complete ? (
                  <CheckCircle className="w-6 h-6 text-green-500" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
              <span
                className={`flex-grow text-gray-700 ${
                  todo.is_complete ? 'line-through text-gray-500' : ''
                }`}
              >
                {todo.task}
              </span>
              <button
                onClick={() => deleteTask(todo.id)}
                className="flex-shrink-0 ml-3 text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
