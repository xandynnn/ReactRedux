import React from 'react';

export default function Ninjas ({ ninjas, deleteNinja }) {
    // const ninjaList = ninjas.map(ninja=>{
    //     if (ninja.age > 24 ){
    //         return (
    //             <div className="ninja" key={ ninja.id }>
    //                 <div>Name: { ninja.name }</div>
    //                 <div>Age: { ninja.age }</div>
    //                 <div>Belt: { ninja.belt }</div>
    //             </div>
    //         )
    //     }else{
    //         return null;
    //     }
    // })

    return (
       <div className="ninjaList">
           { 
               
                ninjas.map(ninja=>{
                    return ninja.age > 24 ? (
                        <div className="ninja" key={ ninja.id }>
                            <div>Name: { ninja.name }</div>
                            <div>Age: { ninja.age }</div>
                            <div>Belt: { ninja.belt }</div>
                            <button onClick={()=> deleteNinja(ninja.id)}>Delete Ninja</button>
                        </div>
                    ) : null;
                })

            }
       </div>
    );
};
