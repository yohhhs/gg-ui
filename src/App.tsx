import React, { useState } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'

import Button from "./components/Button/button";
import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";
import Alert from "./components/Alert/alert";
import Tabs from "./components/Tabs/tabs";
import TabItem from "./components/Tabs/tabItem";
import Icon from "./components/Icon/icon"
import Transition from "./components/Transition/transition";

library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header" style={{padding: 50}}>
        <Menu onSelect={(i) => alert(i)}>
          <SubMenu title='biaoti'>
            <MenuItem>122222222</MenuItem>
            <MenuItem>2</MenuItem>
            <MenuItem>3</MenuItem>
          </SubMenu>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
        </Menu>
        {/*<Menu mode='vertical'>
          <MenuItem index={1}>1</MenuItem>
          <MenuItem index={2}>2</MenuItem>
          <MenuItem index={3}>3</MenuItem>
        </Menu>*/}
        <Button size='lg' btnType='primary' onClick={() => setShow(!show)}>large primary</Button>
        <Button size='sm' btnType='danger'>small danger</Button>
        <Button btnType='default' disabled>默认按钮</Button>
        <Button btnType='link' href={'//ba'}>a</Button>
        <h1>hello world</h1>
        <h2>hello world</h2>
        <h3>hello world</h3>
        <hr/>
        <h1>alert</h1>
        <Alert title='这是一个alert' content='content' closed />
        <h1>tabs</h1>
        <Tabs>
          <TabItem label='1'>1111</TabItem>
          <TabItem label='2'>2222</TabItem>
          <TabItem label='3' disabled>3333</TabItem>
        </Tabs>
        <Icon icon='arrow-down' theme='warning' />
        <Transition timeout={300} in={show} animation='zoom-in-left'>
          <div>
            <p>1111111111111111111111111111111</p>
            <p>1111111111111111111111111111111</p>
            <p>1111111111111111111111111111111</p>
            <p>1111111111111111111111111111111</p>
          </div>
        </Transition>
      </header>
    </div>
  );
}

export default App;
