interface VezerlopultProps{
    lampaKapcsolasa:()=> void
}

const Vezerlopult=({
    lampaKapcsolasa,
}: VezerlopultProps)=>{
    return(
        <>
            <h2>Vezérlőpult</h2>
            <button onClick={lampaKapcsolasa}>Lámpa kacsolása</button>
        </>
    )
}
export default Vezerlopult