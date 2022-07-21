import { getCopyrightYear } from '~/utils/date'

const Footer: RC.WithoutChildren = () => {
  const copyrightYear = getCopyrightYear()

  return (
    <footer>
      <p>
        <small>&copy; {copyrightYear}</small>
      </p>
    </footer>
  )
}

export default Footer
