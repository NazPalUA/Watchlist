type MovieLayoutProps = {
  children: React.ReactNode
  cast: React.ReactNode
  related: React.ReactNode
}

export default function MovieLayout({
  children,
  cast,
  related,
}: MovieLayoutProps) {
  return (
    <div>
      {children}
      {cast}
      {related}
    </div>
  )
}
