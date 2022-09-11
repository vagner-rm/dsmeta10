import './styles.css'
import NotificationButton from '../NotificationButton'
function SalesCard() {
    return (
        <div className=" card">
            <h2>Vendas</h2>
            <div>
                <div id="form-control-container">
                    <input className="form-control"/>
                </div>
                <div id="form-control-container">
                    <input className="form-control"/>
                </div>
            </div>

            <div>
                <table className="sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">13</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">13</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#341</td>
                            <td className="show576">08/07/2022</td>
                            <td>anakin</td>
                            <td className="show992">15</td>
                            <td className="show992">13</td>
                            <td>R$ 55300,00</td>
                            <td>
                                <div className="red-btn-container">
                                <NotificationButton />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>


    )
}


export default SalesCard
