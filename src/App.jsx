import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: String 

const posts = [
  {
    id: 1,
    author: {
      avatarURL: "https://github.com/morikawa77.png",
      name: "Reginaldo Morikawa",
      role: "Software Project Manager",
    },
    content: [
      { 
        type: 'paragraph', 
        content: 'Fala galeraa 👋'
      },
      { 
        type: 'paragraph', 
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { 
        type: 'link', 
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-10-15 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarURL: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator",
    },
    content: [
      { 
        type: 'paragraph', 
        content: 'Fala galeraa 👋'
      },
      { 
        type: 'paragraph', 
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { 
        type: 'link', 
        content: 'jane.design/doctorcare',
      },
    ],
    publishedAt: new Date('2022-10-17 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
        
      </div>
    </div>
  )
}


