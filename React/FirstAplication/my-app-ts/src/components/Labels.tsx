interface ILabels{
    name: string,
    htmlfor: string,
    type?: string
}

export const Labels = ({name, htmlfor, type}: ILabels) => {
    return (
        <>
            <label htmlFor={htmlfor}>
                {name}
            </label>
            <input id={htmlfor} type= {type}/>
        </>
    )
}