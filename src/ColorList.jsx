export default function ColorList({colors, fontSize}){
    return(
        <div>
            <h2>color list:</h2>
            <ul>
                {colors.map(c => <li style={{ color: c, fontSize: fontSize }}>{c}</li>)}
            </ul>
        </div>
    );
}


// export default function ColorList({colors}){
//     const lis = colors.map(color => <li>{color}</li>);
//     return(
//         <div>
//             <h2>color list:</h2>
//             <ul>{lis}</ul>
//         </div>
//     );
// }