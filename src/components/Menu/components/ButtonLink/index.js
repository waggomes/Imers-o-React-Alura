import React, { Children } from 'react';

function ButtonLink(props){
    //props = {className: "o que alguem passar ", href:'/'}

    return(
        <Button  href={props.href} className={props.className}>
           Novo video
        </Button>
    );

}

export default ButtonLink
