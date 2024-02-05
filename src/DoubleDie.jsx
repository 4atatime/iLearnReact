export default function DoubleDie() {
    const num1 = Math.floor(Math.random() * 4) +1 
    const num2 = Math.floor(Math.random() * 4) +1 
    const isWinner = num1 === num2;
    const styles = { color: isWinner ? "green" : "red"}
    return (
        <div className="DoubleDie" style={styles}>
            <h2>Double dice, double nice!</h2>
            {isWinner && <h3>"Good job!"</h3>}
            <p>number #1 is: {num1}</p>
            <p>number #2 is: {num2}</p>
        </div>
    )
}


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 7) +1 
//     const num2 = Math.floor(Math.random() * 7) +1 
//     return (
//         <div>
//             <h2>Double dice, double nice!</h2>
//             {num1 === num2 && <h3>"Good job!"</h3>}
//             <p>number #1 is: {num1}</p>
//             <p>number #2 is: {num2}</p>
//         </div>
//     )
// }


// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 7) +1 
//     const num2 = Math.floor(Math.random() * 7) +1 
//     return (
//         <div>
//             <h2>Double dice, double dare!</h2>
//             {num1 === num2 ? <h3>"Good job!"</h3> : null}
//             <p>number #1 is: {num1}</p>
//             <p>number #2 is: {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 7) +1 
//     const num2 = Math.floor(Math.random() * 7) +1 
//     return (
//         <div>
//             <h2>{num1 === num2 ? "Good job!" : "Next time!"}</h2>
//             <p>number #1 is: {num1}</p>
//             <p>number #2 is: {num2}</p>
//         </div>
//     )
// }

// export default function DoubleDice() {
//     const num1 = Math.floor(Math.random() * 7) +1 
//     const num2 = Math.floor(Math.random() * 7) +1 
//     const result = num1 === num2 ? "Good job!" : "Next time!"
//     // if (num1 == num2) {
//     //     return (
//     //         <div>
//     //             <h2>Good job!</h2>
//     //             <p>
//     //                 number #1 is: {num1}
//     //             </p>
//     //             <p>
//     //                 number #2 is: {num2}
//     //             </p>
//     //         </div>
//     //     )
//     // }
//     // return (
//     //     <div>
//     //         <h2>Next time!</h2>
//     //         <p>
//     //          number #1 is: {num1}
//     //         </p>
//     //         <p>
//     //         number #2 is: {num2}
//     //         </p>
//     //     </div>
//     //     )
    
//     return (
//         <div>
//             <h2>{result}</h2>
//             <p>
//                 number #1: {num1}
//                 <br></br>
//                 number #2: {num2}
//             </p>
//         </div>
//     )
// }