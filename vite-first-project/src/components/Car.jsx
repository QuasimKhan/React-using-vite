function Car(props){

    return (
        <div>
            <li>{props.id} - {props.name} - {props.color}</li>
        </div>
    )
}

function Garage(){
    const cars = [
        {
            id : 1,   
            name : "BMW",
            color : "red"
        },
        {
            id :2,
            name : "Audi",
            color : "blue"
        },
        {
            id :3,
            name : "Mercedes",
            color : "green"
        }
    ]

    return(
        <>
        <h1>What is inside my Garage</h1>
        
            {cars.map((car) => <Car id={car.id} name={car.name} color={car.color} />)}
        </>
    )
}

export default Garage;