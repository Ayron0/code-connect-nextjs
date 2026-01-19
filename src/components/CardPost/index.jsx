import Image from "next/image"

export const CardPost = ({ post }) => {
  return(
    <article>
      <header>
        <figure>
          <Image />
        </figure>
      </header>

      <section>
        titulo
        texto
      </section>

      <footer></footer>
    </article>
  )
}