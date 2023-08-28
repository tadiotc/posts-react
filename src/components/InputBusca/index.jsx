
import './input.css'

export const InputBusca = ({ searchValue, handleChange }) => {

    return(
        <div className="posts_componentes">

            <input 
                type='search' 
                className='inputbusca'
                onChange={handleChange}
                value={searchValue}
            />

        </div>
    );
}
