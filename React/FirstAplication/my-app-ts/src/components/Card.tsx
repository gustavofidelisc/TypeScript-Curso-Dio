/*
* Um componente que retorna um componente HTMl
*/

interface ICard {
    id:  number,
    paragraph: string,
    details: string
}

// passing a id from the interface in props
// variable in HTML {id}
export const Card = ( {id, paragraph, details} : ICard) => {
    return (
    <div>
        <h1>Card {id}</h1>
        <p>{paragraph}</p>
        <p>{details}</p>
    </div>
    )
}