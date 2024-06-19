
    export function GridComponent(props){

        return(
            <div className="container-fluid">
                <table className="table  table-hover caption-top">
                    <caption>{props.caption}</caption>
                  <thead className="table-dark">
                        <tr>
                            {

                                props.fields.map(field =>
                                    <th key={field}>{field.charAt(0).toUpperCase()+field.slice(1)}</th>
                                )
                            }
                        </tr>
                  </thead>
                  <tbody>
                    {
                        props.data.map((item,index) =>
                            <tr key={index} >
                                {
                                    Object.keys(item).map(key =>
                                        <td key={item[key]} className="table-primary">{item[key]}</td>
                                    )
                                }
                            </tr>
                        )
                    }
                  </tbody>
                </table>
            </div>
        )
    }