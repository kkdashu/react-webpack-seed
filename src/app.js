import './app.scss';
import React from 'react';
import Header from './components/header/header';

function main() {
  React.render( <div>
    <Header />
    <section> content </section>
   </div> , document.body);
}

main();
