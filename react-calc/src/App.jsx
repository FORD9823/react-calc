import { useState } from 'react'
import './App.css'

function App() {
    const nums = [
        {id: '000', value: '0'}, 
        {id: '001', value: '1'},
        {id: '002', value: '2'},
        {id: '003', value: '3'},
        {id: '004', value: '4'}, 
        {id: '005', value: '5'}, 
        {id: '006', value: '6'}, 
        {id: '007', value: '7'}, 
        {id: '008', value: '8'}, 
        {id: '009', value: '9'}
    ]
    const [operand1, setOperand1] = useState('')
    const [operand2, setOperand2] = useState('')
    const [operator, setOperator] = useState('')
    const [isResult, setIsResult] = useState(false)

    const onPlusClick = () => {
        setOperator('+')
        setIsResult(false)
    }
    const onMinusClick = () => {
        setOperator('-')
        setIsResult(false)
    }
    const onSolveClick = () => {
        if(operator === '+'){
            setOperand1(Number(operand1) + Number(operand2))
        }else{
            setOperand1(Number(operand1) - Number(operand2))
        }
        setOperand1((prev) => prev )
        setOperand2('')
        setOperator('')
        setIsResult(true)
    }
    const onDiscardClick = () => {
        setOperator('')
        setOperand1('')
        setOperand2('')
        setIsResult(false)
    }

  return (
    <>
        <div className='container'>
            <div className='calcDisplay' style={isResult ? {color: 'red'} : {color: 'green'} }>
                Value: {operand1} {operator} {operand2}
            </div>
            <div className='buttonsField'>
                <div className='buttons'>
                    {nums.map( item => 
                        <button onClick = {() => {
                            if(operator === ''){
                                if(operand1 === '0'){
                                    setOperand1(item.value)
                                }else {
                                    setOperand1(operand1 + item.value)
                                } 
                            }else { 
                                if(operand2 === '0'){
                                    setOperand2(item.value)
                                }else {
                                    setOperand2(operand2 + item.value)
                                }
                            }
                            setIsResult(false)
                        }} key={item.id}>
                            {item.value}
                        </button>
                        )
                    }
                    <button onClick={onPlusClick}>
                        +
                    </button>
                    <button onClick={onMinusClick}>
                        -
                    </button>
                    <button onClick={onSolveClick}>
                        =
                    </button>
                    <button onClick={onDiscardClick}>
                        C
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
