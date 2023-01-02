import React from 'react';
import './App.css';
// import './bootstrap.min.css';

function Hero(){
  return (
    <div className='row'>
      <div class="container-fluid">
        <div class="jumbotron col-10 offset-1">
          <h1>App Quixz</h1>
          <p>Instructions: To play the Game select the author who wrote the book correctly.</p>
        </div>
      </div>
    </div>
  );
}

function Book({title}){
  return (<div className='answer'>
    <h4>{title}</h4>
  </div>);
}

function Turn({ author, books }) {
  return (
    <div className='row turn' style={{ backgroundColor: 'white' }}>
      <div className='col col-lg-4 offset-1'>
        <img src={author.imageUrl} className='authorImage' alt='author' />
      </div>
      <div className='col col-lg-6'>
        {books.map((title) => <Book title={title} key={title}/>)}
      </div>
    </div>
  );
}

  
function Continue(){
  return (
    <div>continue</div>
  );  
}


function Footer() {
  return (
    <div id='footer' className='row'>
      <div className='col-12'>
        <p className='text-muted credit'>All rights reserved</p>
      </div>
    </div>);
}


function AuthorQuiz({ turnData }) {
  return (
    <div className="container">
    <Hero />
    <Turn {...turnData} />
    <Continue />
    <Footer />
    </div>
  );
}

export default AuthorQuiz;
