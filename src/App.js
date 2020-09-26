import React from 'react';
import './App.css';
import { GetWellModule } from './Presentational/GetWellModule';
import CommentSection from './Containers/CommentSection';
import { Row, Col } from 'reactstrap';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Row style={
        {
          width: '100%'
        }
      }>        
        <Col style={{
           backgroundColor: '#f5f5f5',
           height: '100vh'
        }}> 
          <CommentSection />
        </Col>
        <Col id="rightSide">  
          <GetWellModule />
        </Col> 
      </Row>
      </header>
    </div>
  );
}
export default App;
