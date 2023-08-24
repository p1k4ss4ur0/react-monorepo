import {BrowserRouter, Routes as Router, Route} from 'react-router-dom';

import Start from '@pages/Start';
import Editor from '@pages/Editor';

import Header from '@components/organisms/Header';

export default function Routes() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Router>
          <Route path='/' element={<Start />} />
          <Route path='/editor' element={<Editor />} />
        </Router>
      </BrowserRouter>
    </>
  );
}
