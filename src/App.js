import './App.css';
import React, { Suspense } from 'react';
import { Switch, BrowserRouter, Route, Redirect, Link } from 'react-router-dom';
import NotFound from './components/Notfound';
import Photo from './features/Photo';
import Header from './components/Header';

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header />
          <ul>
            <li><Link to="/photos" >Go to photo page</Link></li>
            <li><Link to="/photos/add" >Go to add new photo page</Link></li>
            <li><Link to="/photos/123" >Go to edit photo page</Link></li>
          </ul>

          <Switch>
            <Redirect exact from="/" to="/photos" />
            <Route path="/photos" component={Photo} />
            <Route component={NotFound} />

          </Switch>
        </BrowserRouter>
      </Suspense>

    </div>
  );
}

export default App;
