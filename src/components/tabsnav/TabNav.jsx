const TabNav = ({ datas, active, prefix }) =>{
    return (
        <ul className="nav nav-tabs" role="tablist" id="myTab">
            {
                datas.map( data => (
                    <li role="presentation" className="nav-item" key={data.id}>
                        <a href={"#"+prefix+"-"+data.id} className={data.id === active? 'btn active' : 'btn'} id={prefix+"-"+data.id+"-nav"} data-bs-toggle="tab" data-bs-target={"#"+prefix+"-"+data.id} type="button" role="tab" aria-controls={prefix+"-"+data.id} aria-selected="true">{data.name}</a>
                    </li>
                ))
            }
        </ul>
    )
}


export default TabNav