const poem = {
    lines: [
      'Escribo, borro y reescribo',
      'Borro de nuevo, y luego',
      'Florece una amapola.'
    ]
  };
  
  export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) =>
          {
            return (
              <>
                { index != 0 && <br /> }
                <p key={index}>
                  {line}
                </p>
              </>
            ) 
          }
        )}
      </article>
    );
  }
  