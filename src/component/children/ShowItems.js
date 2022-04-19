import React from 'react';
import styles from '../style/pagination.module.css';
const Items = React.memo(({ currentItems }) =>{
    return (
      <div style={{
        height: '500px',
        overflowX: 'scroll'
      }}>
        {currentItems &&
          currentItems.map((item) => {
            const { images } = item;
            const imageComponent = images && images.length > 0 && [images.pop()].map((e, i) => {
              return <img key={i} src={e.url} width={50} height={50} />
            })
            return (
              <div key={item.id} className={styles.row}>
                <div className={styles.column} >
                  <h2>
                    {item.name}
                  </h2>
                  <p>Some text..</p>
                  {imageComponent}
                </div>
              </div>
            )
          })}
      </div>
    );
  })

export default Items;