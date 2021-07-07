import React, {useEffect} from 'react'
import { useHistory, Link, Switch, Route, useRouteMatch } from 'react-router-dom'
import { EditProfile } from '../components/EditProfile'
import { ViewProfile } from '../components/ViewProfile'

function Profile({login}) {
    const history = useHistory()
    const {path, url} = useRouteMatch()
    useEffect(() => {
        if(!login) {
            history.push('/')
        }
    }, [login, history])
    return (
        <>
            <h1>PROFILE</h1>
            <ul className="nav">
                <li>
                    <Link to={`${url}/viewprofile`}>Viwe</Link>
                </li>
                <li>
                    <Link to={`${url}/editprofile`}>Edit</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/viewprofile`} component={ViewProfile}/>
                <Route path={`${path}/editprofile`} component={EditProfile}/>
            </Switch>
        </>
    )
}

export default Profile
