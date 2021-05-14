import { Route, Switch } from 'react-router-dom'
import MainCalculadora from '../pages/calculadora/MainCalculadora'
import MainUsers from '../pages/usersList/MainUsers'

const Routes = () => {
    
	return(

		<Switch >
		   <Route path="/calculadora" component={MainCalculadora} />
		   <Route path="/" component={MainUsers} />
		</Switch >
	)
}

export default Routes
