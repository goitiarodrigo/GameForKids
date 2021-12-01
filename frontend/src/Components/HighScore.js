

const HighScore = () => {
    return (
        <div className="container">
            <div className="highscoreContainer">
                <div className="headTable">
                    <table className="highScore">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>CORREO ELECTRÓNICO</th>
                                <th>PUNTOS</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="bodyContainer">
                    <table>
                        <tbody>
                            <tr>
                                <td>Rodrigo</td>
                                <td>goitiarodrigo@hotmail.com</td>
                                <td>300 puntos</td>
                            </tr>
                            <tr>
                                <td>Sara</td>
                                <td>saraandrea@hotmail.com</td>
                                <td>250 puntos</td>
                            </tr>
                            <tr>
                                <td>Javier</td>
                                <td>javier2019@gmail.com</td>
                                <td>300 puntos</td>
                            </tr>
                            <tr>
                                <td>Ivan</td>
                                <td>ivanramos@hotmail.com</td>
                                <td>300 puntos</td>
                            </tr>
                            <tr>
                                <td>Luis</td>
                                <td>luisnuñez@gmail.com</td>
                                <td>300 puntos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default HighScore