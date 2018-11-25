import React from 'react'

export default props => {
    console.log(">>>>IF",props.test)
    if(props.test){
        return props.children
    }else{
        return false
    }
}