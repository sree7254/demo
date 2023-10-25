import styles from './Comp.module.css'

export default function comp({name}){

    function handle(){
        window.alert('hello')

    }



    return(
        <div className={styles.hyd}>
            <h1 onClick={handle} >component</h1>
            <h1>{name}</h1>
        </div>
    )
}