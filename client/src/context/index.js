import React from 'react'

export const connectionsContext = React.createContext({
    connection: {
        access_token: "",
        refresh_token: ""
    },
    setConnection: ()=>{}
});
