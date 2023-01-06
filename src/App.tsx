import React, {useEffect, useState} from 'react';
import './App.css';
import AddNewClient from "./component/AddNewClient";
import {Container} from "react-bootstrap";
import TOTPCodeModel from "./model/TOTPCodeModel";
import TOTPCode from "./component/TOTPCode";

function App() {

    const [savedKeys, setSavedKeys] = useState <Array<any>>([]);

    useEffect(() => {
        let storedItems: Array<TOTPCodeModel> = []
        for (const key in localStorage) {
            const item = localStorage.getItem(key);
            if (item) {
                const itemObject = JSON.parse(item);
                storedItems.push(itemObject)
            }
        }
        console.log(storedItems);

        setSavedKeys(storedItems.map((item) => {
                return <TOTPCode code={item.code} name={item.name} key={item.name}></TOTPCode>
            }
        ));
    }, []);

    return (
        <div className="App">
            <Container>
                <header className="App-header">
                    <h1>
                        Open private One Time Password client
                    </h1>
                </header>
                <AddNewClient></AddNewClient>
                {savedKeys}
            </Container>
        </div>
    );
}

export default App;
