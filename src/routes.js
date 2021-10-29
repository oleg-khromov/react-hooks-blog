import { Switch, Route} from "react-router-dom";
import Home from "./pages/home";
import Auth from "./pages/auth";
import User from "./pages/user";
import Articles from "./pages/articles";
import ArticleOne from "./pages/articleOne";

const Routes = () => (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Auth} />
      <Route path="/registr" component={Auth} />
      <Route path="/user" component={User} />
      <Route path="/articles" exact component={Articles} />
      <Route path="/articles/:id" component={ArticleOne} />
    </Switch>
)

export default Routes;