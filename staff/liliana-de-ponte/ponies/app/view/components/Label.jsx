function Label({ className = '', children, ...nextProps }) {
    return <label className={"flex flex-col text-[rgb(60,9,44)] gap-0.5 font-bold font-serif rounded-[3px]"} {...nextProps}>{children}</label>

}

export default Label

// .Label {
//     display: flex;
//     flex-direction: column;
//     color: rgb(60, 9, 44);
//     gap: .2rem;
//     font-weight: bold;
//     font-family: solid Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
//     border-radius: 3px;
// }