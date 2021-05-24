// import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import TaskOne from './components/TaskOne';
import TaskTwo from './components/TaskTwo';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { PageWrapper, P, MenuUL } from './components/Styled.common';
import { Button, Divider, Typography } from 'antd';
import { RightCircleTwoTone, LeftCircleTwoTone } from '@ant-design/icons';
const { Title } = Typography;

// Welcome page
const Welcome = () => {
  return <PageWrapper>
    <Title>Welcome! Task projects for iBOS Ltd.</Title>
    <P>by Md. Mahabub Alam | <Link target="_blank" to="//mahabubdev.github.io/">@mahabubdev</Link></P>
    <Divider />
    <p>Go to <Link to="/task">Tasks list <RightCircleTwoTone /></Link></p>
  </PageWrapper>
}


const Tasks = ({ match }) => {
  return <PageWrapper tasks>
    <MenuUL>
      <li><Link to={match.url + "/1"}><Button type="primary">Task 01</Button></Link></li>
      <li><Link to={match.url + "/2"}><Button type="primary">Task 02</Button></Link></li>
    </MenuUL>
    <Switch>
      <Route exact path={match.url} render={() => (
        <PageWrapper>
          <h2>Please select a task from the menu</h2>
        </PageWrapper>
      )} />
      <Route path={match.url + "/1"} component={TaskOne} />
      <Route path={match.url + "/2"} component={TaskTwo} />
      <Route path="/**" render={() => (
        <PageWrapper>
          <Title>Page not found! Error 404.</Title>
          <Link to="/"><LeftCircleTwoTone /> Go back</Link>
        </PageWrapper>
      )} />
    </Switch>
  </PageWrapper>
}


// App
function App() {
  return <BrowserRouter>
    <Switch>
      <Route path="/" render={() => <Welcome />} exact />
      <Route path="/task" component={Tasks} />
      <Route path="/**" render={() => (
        <PageWrapper>
          <Title>Page not found! Error 404.</Title>
          <Link to="/"><LeftCircleTwoTone /> Go back</Link>
        </PageWrapper>
      )} />
    </Switch>
  </BrowserRouter>
}

export default App;
