import './Container.css';

const Container = ({value})=>{
    console.log(value);
    return (<>
    <div className='Container'>
        {console.log('value', value)}
        {value} 
    </div>
    </>);
    // return {value};
};
export default Container;
