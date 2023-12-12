import './App.css';
import { motion } from 'framer-motion';
import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <motion.div 
        transition={{ layout: { duration: 1, type: "spring" }}} 
        layout onClick={() => setIsOpen(!isOpen)} 
        className='card'
        style={{ 
          borderRadius: "1rem", 
          boxShadow: '0px 10px 30px rgba(0, 0, 0, .5)' 
        }}
      >
        <motion.h2 layout='position'>Framer Motion 🚀</motion.h2>
          {isOpen && (
            <motion.div 
              className='expand' 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              exit={{ opacity: 0 }}
            >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut placeat nam, atque tempore nostrum magnam ipsa consectetur possimus quae.
              </p>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis, possimus!</p>
              <button>Hello</button>
            </motion.div>
          )}
      </motion.div>
    </div>
  );
}

export default App;
