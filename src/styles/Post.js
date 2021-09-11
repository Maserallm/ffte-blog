import { createGlobalStyle } from "styled-components";

const Posts = createGlobalStyle`
.post {
    display: grid;
    grid-template-columns: 3fr 12fr 5fr;
    max-width: 1000px;
    gap: 30px 50px;
    margin: 70px auto;
  }
  
  .post > * {
    grid-column: 2 / -2;
  }
  
  .post > h2 {
    grid-column: 1 / -1;
    text-align: center;
  }
  
  .post > figure {
    width: 100%;
    margin: 0;
    grid-column: 1 / -1;
  }
  
  figcaption {
    font-size: 10px;
  }
  
  .post > blockquote {
    margin: 0;
    grid-column: 1 / -1;
    font-size: 60px;
    text-align: center;
    font-style: italic;
  }
  


  @media(max-width: 450px) {
    .post > * {
        grid-column: 1 / -1;
        gap: 10px;
      }
    
    .post > blockquote {
        font-size: 30px;
    }

    

  }

`;

export default Posts;
