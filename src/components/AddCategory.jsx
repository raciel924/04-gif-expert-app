import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('one Punch')

    const onIpuntChange = ({target}) => {
        setInputValue(target.value);
    }
    const SubmitEvent = (event) => {
        event.preventDefault()
        if(inputValue.trim().length <=1 ) return;

        onNewCategory(inputValue.trim())    
        //setcategories(categories => [inputValue, ...categories])
        setInputValue('')
    }

  return (
    <form onSubmit={SubmitEvent}>
    <input
        type="text"
        placeholder="busca un gif"
        value={inputValue}
        onChange={onIpuntChange}
        />
    </form>
  )
}
