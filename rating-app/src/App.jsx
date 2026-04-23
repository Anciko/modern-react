import './index.css'
import Rating from './components/Rating'

function App() {
  return (
    <>
      <Rating title="How do u feel today?" feedbackMessages={['Terrible', 'Bad', 'Okay', 'Good', 'Great']} />
    </>
  )
}

export default App
