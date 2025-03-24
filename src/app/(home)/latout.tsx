interface LayoutProps {
  children: React.ReactNode;
}

const latout = ({children}: LayoutProps) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default latout
