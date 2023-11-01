import React from 'react';
import './article.scss';

function Article() {

  // placeholder data; TODO: get first(latest) article from blog
  const articles = [{
    title: 'Blog Title',
    date: '12/3/2023',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus amet explicabo sit earum accusantium animi eum, quasi, neque reprehenderit tempora possimus architecto eveniet! Minus cum temporibus, rerum, at adipisci, consequuntur id odit iure tempore repellendus sequi aut ab cumque! Esse voluptas, quia cumque explicabo blanditiis labore dolorem libero unde modi.',
    image: 'https://images.unsplash.com/photo-1683299048343-af8333eef465?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageDesc: 'chaton avec arbre de chat',
  }]

  return (
    <div className='article'>
      <div className='articleText'>
        <h3>{articles[0].title}</h3>
        <h4>{articles[0].date}</h4>
        <p>{articles[0].text}</p>
      </div>
      {/* only create div for image if it exists*/}
      {articles[0].image ? <div className="articleImage">
        <img src={articles[0].image} alt={articles[0].imageDesc} />
      </div> : <> </>}
    </div>
  )
}

export default Article;