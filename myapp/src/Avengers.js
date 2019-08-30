import React from 'react';

const Avengers = ({ avengers, deleteAvenger }) => {
    const avengersList = avengers.map(avenger => {
        if (avenger.age > 20) {
        return (
            <div className="avengers" key={ avenger.id }>
                <div>Name: { avenger.name }</div>
                <div>Codename: { avenger.codename }</div>
                <div>Age: { avenger.age }</div>
                <button onClick={() => { deleteAvenger(avenger.id)} }>Delete Avenger</button>
            </div>
            )
        } else {
            return null
        }
    });

    return (
        <div className='avengers-list'>
            { avengersList }
        </div>
    );
};

export default Avengers;
