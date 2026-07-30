export default function Card({title, children}:{title:string, children:React.ReactNode}){
  return (
    <article className="card">
      <h3>{title}</h3>
      <div>{children}</div>
    </article>
  )
}
