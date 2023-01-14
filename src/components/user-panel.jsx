import React from 'react';

export const UserPanel = ({user}) => {
    console.log(user)
return (
    
    <div>
    <div>
        <h3> <i className="glyphicon glyphicon-user"></i> Welcome, {user.name}</h3>
    </div>
</div>
)

}