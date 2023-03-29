import React from 'react'
import { connect} form 'react-redux';
import { settablenumber } from'./Action';
const Table=({ table_number,settablenumber}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const inActiveBtn='Btn btn-outline-primary m-2';
    const activeBtn='btn btn-outline-primary m-2 active';
    return (
        <div>
            <center className="mt-2>
            <h4>please select your Table number</h4>
            { number.map((num,index) =>{
                <div style ={ { display :'inline '}} key={ index}>
                <button className={ table_number===num? activeBtn :inActiveBtn} onclick=(()=>settablenumber(num)}>
                { num}
                </button>
                </div>
                ))}
                </center>
                </div>
            }
            }
            const mapState
        </div>
    )
     









}