import { Route, Switch } from 'react-router-dom'
import MainCalculadora from '../pages/calculadora/MainCalculadora'
import MainUsers from '../pages/usersList/MainUsers'
import Register from '../pages/register/Register'

const Routes = () => {
    
	return(

		<Switch >
		   <Route path="/calculadora" component={MainCalculadora} />
		   <Route path="/register" component={Register} />
		   <Route path="/" component={MainUsers} />
		</Switch >
	)
}

export default Routes
