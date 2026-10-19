interface LampaProps{
    ertek:number
}
const Lampa = ({ertek}: LampaProps)=>{
    return(
        <>
            <h2>Lámpa</h2>
            <strong>Kapcsolások száma:{ertek}</strong>
        </>
    )
}
export default Lampa